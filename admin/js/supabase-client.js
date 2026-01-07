// Supabase Client Configuration for Printhub CMS
// This file initializes the Supabase client for use in the admin panel

const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // Replace with your Supabase project URL
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your Supabase anon key

// Initialize Supabase Client (using CDN for simplicity)
// Include this script in HTML: <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

let supabase;

function initSupabase() {
    if (typeof window.supabase !== 'undefined') {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('✅ Supabase client initialized');
        return supabase;
    } else {
        console.error('❌ Supabase JS library not loaded');
        return null;
    }
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        console.error('Login error:', error.message);
        return { success: false, error: error.message };
    }

    // Store session
    localStorage.setItem('printhub_session', JSON.stringify(data.session));
    localStorage.setItem('printhub_user', JSON.stringify(data.user));

    return { success: true, user: data.user, session: data.session };
}

async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error('Logout error:', error.message);
        return { success: false, error: error.message };
    }

    localStorage.removeItem('printhub_session');
    localStorage.removeItem('printhub_user');

    return { success: true };
}

async function getUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

async function getUserProfile() {
    const user = await getUser();
    if (!user) return null;

    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

    if (error) {
        console.error('Error fetching profile:', error.message);
        return null;
    }

    return data;
}

function isAuthenticated() {
    const session = localStorage.getItem('printhub_session');
    return session !== null;
}

// Auth guard for admin pages
async function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
        return false;
    }

    const user = await getUser();
    if (!user) {
        localStorage.removeItem('printhub_session');
        localStorage.removeItem('printhub_user');
        window.location.href = 'login.html';
        return false;
    }

    return true;
}

// ============================================
// SITE SETTINGS FUNCTIONS
// ============================================

async function getSiteSettings() {
    const { data, error } = await supabase
        .from('site_settings')
        .select('*');

    if (error) {
        console.error('Error fetching site settings:', error.message);
        return {};
    }

    // Convert array to object
    const settings = {};
    data.forEach(item => {
        settings[item.key] = item.value;
    });

    return settings;
}

async function updateSiteSetting(key, value) {
    const user = await getUser();

    const { data, error } = await supabase
        .from('site_settings')
        .upsert({
            key,
            value,
            updated_at: new Date().toISOString(),
            updated_by: user?.id
        }, { onConflict: 'key' });

    if (error) {
        console.error('Error updating site setting:', error.message);
        return { success: false, error: error.message };
    }

    return { success: true, data };
}

// ============================================
// PAGE CONTENT FUNCTIONS
// ============================================

async function getPageContent(pageSlug, sectionKey = null) {
    let query = supabase
        .from('page_content')
        .select('*')
        .eq('page_slug', pageSlug);

    if (sectionKey) {
        query = query.eq('section_key', sectionKey);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching page content:', error.message);
        return null;
    }

    if (sectionKey) {
        return data[0]?.content || null;
    }

    // Convert to object keyed by section
    const content = {};
    data.forEach(item => {
        content[item.section_key] = item.content;
    });

    return content;
}

async function updatePageContent(pageSlug, sectionKey, content) {
    const user = await getUser();

    const { data, error } = await supabase
        .from('page_content')
        .upsert({
            page_slug: pageSlug,
            section_key: sectionKey,
            content,
            updated_at: new Date().toISOString(),
            updated_by: user?.id
        }, { onConflict: 'page_slug,section_key' });

    if (error) {
        console.error('Error updating page content:', error.message);
        return { success: false, error: error.message };
    }

    return { success: true, data };
}

// ============================================
// BLOG POSTS FUNCTIONS
// ============================================

async function getBlogPosts(options = {}) {
    const { status = null, limit = 10, offset = 0, categoryId = null } = options;

    let query = supabase
        .from('blog_posts')
        .select(`
            *,
            category:blog_categories(*),
            author:profiles(full_name, avatar_url)
        `)
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1);

    if (status) {
        query = query.eq('status', status);
    }

    if (categoryId) {
        query = query.eq('category_id', categoryId);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching blog posts:', error.message);
        return [];
    }

    return data;
}

async function getBlogPost(idOrSlug) {
    const isNumeric = !isNaN(idOrSlug);

    let query = supabase
        .from('blog_posts')
        .select(`
            *,
            category:blog_categories(*),
            author:profiles(full_name, avatar_url)
        `);

    if (isNumeric) {
        query = query.eq('id', idOrSlug);
    } else {
        query = query.eq('slug', idOrSlug);
    }

    const { data, error } = await query.single();

    if (error) {
        console.error('Error fetching blog post:', error.message);
        return null;
    }

    return data;
}

async function createBlogPost(post) {
    const user = await getUser();

    const { data, error } = await supabase
        .from('blog_posts')
        .insert({
            ...post,
            author_id: user?.id,
            created_at: new Date().toISOString()
        })
        .select()
        .single();

    if (error) {
        console.error('Error creating blog post:', error.message);
        return { success: false, error: error.message };
    }

    return { success: true, data };
}

async function updateBlogPost(id, updates) {
    const { data, error } = await supabase
        .from('blog_posts')
        .update({
            ...updates,
            updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.error('Error updating blog post:', error.message);
        return { success: false, error: error.message };
    }

    return { success: true, data };
}

async function deleteBlogPost(id) {
    const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting blog post:', error.message);
        return { success: false, error: error.message };
    }

    return { success: true };
}

// ============================================
// PRODUCTS FUNCTIONS
// ============================================

async function getProducts(options = {}) {
    const { isActive = true, limit = 20, offset = 0, categoryId = null, isFeatured = null } = options;

    let query = supabase
        .from('products')
        .select(`
            *,
            category:product_categories(*)
        `)
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1);

    if (isActive !== null) {
        query = query.eq('is_active', isActive);
    }

    if (categoryId) {
        query = query.eq('category_id', categoryId);
    }

    if (isFeatured !== null) {
        query = query.eq('is_featured', isFeatured);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching products:', error.message);
        return [];
    }

    return data;
}

async function getProduct(idOrSlug) {
    const isNumeric = !isNaN(idOrSlug);

    let query = supabase
        .from('products')
        .select(`
            *,
            category:product_categories(*)
        `);

    if (isNumeric) {
        query = query.eq('id', idOrSlug);
    } else {
        query = query.eq('slug', idOrSlug);
    }

    const { data, error } = await query.single();

    if (error) {
        console.error('Error fetching product:', error.message);
        return null;
    }

    return data;
}

async function createProduct(product) {
    const { data, error } = await supabase
        .from('products')
        .insert({
            ...product,
            created_at: new Date().toISOString()
        })
        .select()
        .single();

    if (error) {
        console.error('Error creating product:', error.message);
        return { success: false, error: error.message };
    }

    return { success: true, data };
}

async function updateProduct(id, updates) {
    const { data, error } = await supabase
        .from('products')
        .update({
            ...updates,
            updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.error('Error updating product:', error.message);
        return { success: false, error: error.message };
    }

    return { success: true, data };
}

async function deleteProduct(id) {
    const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting product:', error.message);
        return { success: false, error: error.message };
    }

    return { success: true };
}

// ============================================
// BLOG CATEGORIES FUNCTIONS
// ============================================

async function getBlogCategories() {
    const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name');

    if (error) {
        console.error('Error fetching blog categories:', error.message);
        return [];
    }

    return data;
}

// ============================================
// PRODUCT CATEGORIES FUNCTIONS
// ============================================

async function getProductCategories() {
    const { data, error } = await supabase
        .from('product_categories')
        .select('*')
        .order('name');

    if (error) {
        console.error('Error fetching product categories:', error.message);
        return [];
    }

    return data;
}

// ============================================
// FILE UPLOAD FUNCTIONS
// ============================================

async function uploadFile(file, folder = 'uploads') {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { data, error } = await supabase.storage
        .from('media')
        .upload(filePath, file);

    if (error) {
        console.error('Error uploading file:', error.message);
        return { success: false, error: error.message };
    }

    // Get public URL
    const { data: urlData } = supabase.storage
        .from('media')
        .getPublicUrl(filePath);

    // Save to media table
    const user = await getUser();
    await supabase.from('media').insert({
        file_name: file.name,
        file_path: filePath,
        file_type: file.type,
        file_size: file.size,
        uploaded_by: user?.id
    });

    return {
        success: true,
        path: filePath,
        url: urlData.publicUrl
    };
}

// ============================================
// USERS/PROFILES FUNCTIONS (Admin only)
// ============================================

async function getAllUsers() {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching users:', error.message);
        return [];
    }

    return data;
}

async function updateUserRole(userId, role) {
    const { data, error } = await supabase
        .from('profiles')
        .update({ role })
        .eq('id', userId)
        .select()
        .single();

    if (error) {
        console.error('Error updating user role:', error.message);
        return { success: false, error: error.message };
    }

    return { success: true, data };
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Load Supabase JS from CDN if not already loaded
    if (typeof window.supabase === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
        script.onload = () => {
            initSupabase();
        };
        document.head.appendChild(script);
    } else {
        initSupabase();
    }
});
