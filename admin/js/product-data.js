const products = [
    {
        id: 1,
        title: "Mực in PET chuyển nhiệt UMO PETInk",
        shortDesc: "Mực in chính hãng UMO, bản in sắc nét, màu sắc rực rỡ, không tắc đầu phun.",
        fullDesc: "Mực in PET chuyển nhiệt UMO PETInk là sản phẩm chính hãng (Brown Label) mang lại chất lượng bản in sắc nét và màu sắc rực rỡ. Sản phẩm đảm bảo độ ổn định cao, công thức đặc biệt giúp hệ thống dẫn mực luôn thông suốt, không gây tắc đầu phun. Phù hợp với nhiều dòng máy in PET hiện nay, mang lại bản in bền màu, chịu được giặt giũ và an toàn cho người sử dụng.",
        specs: [
            "Thương hiệu: UMO INK (Brown Label)",
            "Nguồn gốc: Chính hãng",
            "Dung tích: 1 Lít / Bình",
            "Loại mực: Mực in chuyển nhiệt PET chuyên dụng",
            "Hệ màu: CMYK + White",
            "Đặc điểm: Màu sắc chuẩn, độ bền cao, không lắng cặn"
        ],
        price: "Liên hệ",
        image: "assets/images/ink_clean.jpg"
    },
    {
        id: 2,
        title: "Màng PET in chuyển nhiệt khổ 60cm (2 mặt)",
        shortDesc: "Màng Film DTF chuyên dụng 4 lớp, chịu nhiệt tốt, in được mọi hình ảnh.",
        fullDesc: "Màng PET in chuyển nhiệt (FILM DTF) là loại film chuyên dụng cấu tạo gồm 4 lớp coating giúp chuyển đổi hình ảnh lên bề mặt vải bằng máy ép nhiệt tối ưu nhất. Màng có độ dẻo cao, chịu nhiệt tốt lên đến 120°C, không độc hại. Khả năng in được mọi hình ảnh với gam màu rộng, sắc nét, chi tiết trên nhiều loại vải khác nhau (Cotton, Poly, Linen, Nylon...).",
        specs: [
            "Kích thước: Cuộn 0.6m x 100m",
            "Độ dày: 0.85 - 0.87µm",
            "Nhiệt độ ép: 150 - 165℃",
            "Thời gian ép: 10 - 15 giây",
            "Quy cách: 2 cuộn / hộp",
            "Ứng dụng: Cotton, Polyester, Linen, Nylon, v.v."
        ],
        price: "Liên hệ",
        image: "assets/images/film_clean.jpg"
    },
    {
        id: 3,
        title: "Bột PET chuyển nhiệt chống nhiễm",
        shortDesc: "Bột nhựa dẻo TPU độ bám dính siêu chắc, mềm mại, co giãn tốt.",
        fullDesc: "Bột PET chuyển nhiệt (TPU Powder) đóng vai trò quan trọng trong quy trình in PET. Sau khi in, màng PET đi qua máy rắc bột và sấy ở nhiệt độ tiêu chuẩn. Bột sẽ chuyển sang dạng keo dẻo, giúp cố định hình in lên vải với độ bền cực cao. Đặc tính đàn hồi co giãn tốt, không bị bong tróc hay nứt vỡ hình in dù giặt tay hay giặt máy.",
        specs: [
            "Thương hiệu: SBC Nhập Khẩu",
            "Đóng gói: 25kg / bao (có bán lẻ)",
            "Nhiệt độ sấy bột: 120ºC - 130ºC",
            "Nhiệt độ ép lên áo: 160ºC – 170ºC",
            "Thời gian ép: 10s – 20s",
            "Đặc điểm: Hạt mịn trắng, đàn hồi tốt, độ bám cao"
        ],
        price: "Liên hệ",
        image: "assets/images/powder_clean.jpg"
    }
];

// Helper to find product by ID
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Helper to format specs list
function renderSpecs(specs) {
    return specs.map(spec => `<li>${spec}</li>`).join('');
}
