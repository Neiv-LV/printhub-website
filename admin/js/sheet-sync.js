const SHEET_ID = '1G8l9Suyx3ngNedA9N2UCnBQ09TYtx1zN4fuLUQtraRY';
const GID = '1432363643';
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;

async function fetchSheetData() {
    try {
        const response = await fetch(CSV_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        const text = await response.text();
        return parseCSV(text);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Không thể tải dữ liệu từ Google Sheet. Hãy chắc chắn rằng File đã được Public to web.');
        return [];
    }
}

function parseCSV(text) {
    const rows = text.split('\n').filter(row => row.trim() !== '');
    // Assumption: Row 2 (index 1) is header, Data starts from Row 3 (index 2) based on image
    // Actually, looking at the image:
    // Row 1: "811,10", "48.666.000" (Totals likely)
    // Row 2: Header (No, Ngày đặt hàng, ...)
    // Row 3+: Data

    // Simple CSV parser (does not handle quoted commas perfect but works for simple sheets)
    const data = rows.slice(2).map((row, index) => {
        const cols = row.split(',').map(cell => cell.trim());

        // Generate ID if missing (using index + 1)
        const id = cols[0] || (index + 1);

        // Mapping based on typical structure or the user image
        // Col 0: No
        // Col 1: Ngày đặt
        // Col 3: Khách hàng
        // Col K: Thành tiền (Col 10 if 0-indexed)
        // Col G: Tình trạng (Col 6)
        return {
            id: id,
            date: cols[1],
            customer: cols[3],
            product: cols[4], // PET Design Name
            status: cols[6],
            meters: cols[8], // Meters
            total: cols[10]
        };
    });
    return data.reverse(); // Sort newest first
}

function renderOrders(orders) {
    const tbody = document.querySelector('#order-data');
    if (!tbody) return;

    tbody.innerHTML = '';
    orders.forEach(order => {
        if (!order.customer && !order.date) return; // Skip only if both date and customer are missing

        // Normalize status for badge class
        let statusClass = 'pending';
        let statusText = order.status || 'Chờ xử lý';

        if (statusText.includes('Đã giao')) statusClass = 'completed';
        else if (statusText.includes('Hủy')) statusClass = 'cancelled';
        else if (statusText.includes('Đang')) statusClass = 'pending';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>#${order.id}</td>
            <td>${order.date}</td>
            <td>${order.customer}</td>
            <td>${order.product}</td>
            <td>${order.total}</td>
            <td><span class="status ${statusClass}">${statusText}</span></td>
            <td><button class="btn-outline" style="padding:4px 8px; font-size:0.8rem;">Xem</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function updateReports(orders) {
    // Simple logic to sum up totals if on reports page
    const totalRevenueEl = document.getElementById('total-revenue');
    const totalOrdersEl = document.getElementById('total-orders');

    if (totalRevenueEl && totalOrdersEl) {
        let revenue = 0;
        let count = 0;

        orders.forEach(order => {
            if (order.total) {
                // Remove dots/commas to parse number (Vietnam format usually uses dot for thousands)
                const cleanTotal = order.total.replace(/\./g, '').replace(/,/g, '');
                const val = parseInt(cleanTotal);
                if (!isNaN(val)) revenue += val;
                count++;
            }
        });

        totalRevenueEl.textContent = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(revenue);
        totalOrdersEl.textContent = count;

        // Advanced Reports
        renderCustomerRevenue(orders);
        renderMetersChart(orders);
    }
}

function renderCustomerRevenue(orders) {
    const container = document.getElementById('customer-revenue');
    if (!container) return;

    const customerMap = {};
    orders.forEach(order => {
        if (!order.customer || !order.total) return;
        const name = order.customer.trim();
        const total = parseInt(order.total.replace(/\./g, '').replace(/,/g, '')) || 0;

        if (!customerMap[name]) customerMap[name] = 0;
        customerMap[name] += total;
    });

    // Sort by revenue desc
    const sortedCustomers = Object.entries(customerMap).sort((a, b) => b[1] - a[1]);

    let html = '<table style="width:100%; text-align:left; border-collapse: collapse;">';
    html += '<thead><tr><th style="padding:8px; color:#888;">Khách hàng</th><th style="padding:8px; text-align:right; color:#888;">Doanh thu</th></tr></thead><tbody>';

    sortedCustomers.slice(0, 10).forEach(([name, total]) => {
        const formattedTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total); // Removed .replace('₫', '') to keep symbol or standard format
        html += `<tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
            <td style="padding:8px;">${name}</td>
            <td style="padding:8px; text-align:right; font-weight:600; color:var(--primary-color);">${formattedTotal}</td>
        </tr>`;
    });
    html += '</tbody></table>';

    container.innerHTML = html;
}

function renderMetersChart(orders) {
    const container = document.getElementById('meters-chart');
    if (!container) return;

    // Aggregate by Day (last 7 data points or similar)
    // Actually simplicity: just show total meters per day for the orders available
    const metersMap = {};
    orders.forEach(order => {
        if (!order.meters || !order.date) return;
        const date = order.date;
        const meters = parseFloat(order.meters.replace(',', '.')) || 0; // Handle 5,2 -> 5.2

        if (!metersMap[date]) metersMap[date] = 0;
        metersMap[date] += meters;
    });

    // Get unique dates and sort
    const labels = Object.keys(metersMap).reverse().slice(0, 7).reverse(); // Last 7 days in data (reversed back to chronoligal)
    // Note: orders are reversed (newest first). So 'reverse' gives oldest first.
    // Wait, orders are Newest First. So iterating orders gives Newest dates first.
    // We want to chart left-to-right (Old -> New).
    // So taking first 7 entries of reported dates gives "Recent 7 active days".
    // Then we reverse them to plot Left (Oldest) -> Right (Newest).

    const maxMeters = Math.max(...Object.values(metersMap), 10); // Avoid div by 0

    let html = '<div style="display:flex; align-items:flex-end; gap:10px; height:200px; padding-top:20px;">';

    labels.forEach(date => {
        const val = metersMap[date];
        const heightPct = (val / maxMeters) * 100;
        html += `
            <div style="flex:1; display:flex; flex-direction:column; align-items:center; group">
                <div style="width:100%; height:${heightPct}%; background:var(--primary-color); border-radius:4px 4px 0 0; position:relative; min-height:4px; transition:opacity 0.2s;">
                    <span style="position:absolute; top:-25px; left:0; right:0; text-align:center; font-size:0.75rem; color:white;">${val.toFixed(1)}m</span>
                </div>
                <div style="margin-top:8px; font-size:0.75rem; color:#888;">${date.substring(0, 5)}</div>
            </div>
        `;
    });
    html += '</div>';

    container.innerHTML = html;
}

// Check Auth
function checkAuth() {
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
    }
}

// Init
document.addEventListener('DOMContentLoaded', async () => {
    // Don't check auth on login page
    if (!window.location.pathname.includes('login.html')) {
        checkAuth();
    }

    if (document.querySelector('#order-data') || document.getElementById('total-revenue')) {
        const data = await fetchSheetData();
        if (document.querySelector('#order-data')) renderOrders(data);
        if (document.getElementById('total-revenue')) updateReports(data);
    }
});
