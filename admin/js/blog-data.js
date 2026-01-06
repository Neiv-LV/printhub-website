const blogPosts = [
    {
        id: 1,
        title: "Hướng dẫn toàn tập về in PET chuyển nhiệt cho người mới bắt đầu",
        excerpt: "Tất cả những gì bạn cần biết về công nghệ in đang thống trị thị trường Local Brand 2026. Quy trình, chi phí và cách vận hành.",
        date: "06/01/2026",
        category: "Kiến thức in ấn",
        image: "assets/images/hero.png",
        content: `
            <p class="lead">In PET chuyển nhiệt (Direct to Film - DTF) đã trở thành một "cơn địa chấn" thực sự trong ngành công nghiệp in ấn thời trang, đặc biệt là tại thị trường Việt Nam trong giai đoạn 2024-2026. Không còn là một công nghệ mới lạ, in PET giờ đây là tiêu chuẩn vàng cho các Local Brand nhờ khả năng tái tạo màu sắc tuyệt vời và chi phí đầu tư linh hoạt.</p>

            <p>Trong bài viết này, Printhub sẽ cùng bạn đi sâu vào mọi ngóc ngách của công nghệ này, từ nguyên lý hoạt động, quy trình sản xuất cho đến những bí quyết để có một sản phẩm in bền đẹp.</p>

            <h3>1. In PET chuyển nhiệt là gì?</h3>
            <p>Khác với in lụa (Screen Printing) cần làm khung bản phức tạp hay in trực tiếp (DTG) đòi hỏi máy móc đắt tiền và kén vải, in PET hoạt động dựa trên nguyên lý in mực lên một màng phim trung gian (màng PET). Sau đó, hình in được phủ một lớp keo chuyển nhiệt (bột TPU) và ép lên bề mặt vải.</p>
            <p>Điểm đột phá của công nghệ này nằm ở chỗ nó giải quyết được bài toán "đa sắc màu" và "đa chất liệu". Bạn có thể in một bức ảnh phong cảnh phức tạp với hàng triệu màu sắc lên một chiếc áo cotton 100%, áo poly, vải dù, hay thậm chí là vải jean, điều mà các công nghệ cũ rất khó thực hiện hoặc chi phí rất cao.</p>

            <h3>2. Quy trình in PET chuẩn tại Printhub</h3>
            <p>Để tạo ra một sản phẩm in PET chất lượng, quy trình sản xuất phải tuân thủ nghiêm ngặt 4 bước sau:</p>
            
            <h4>Bước 1: Thiết kế và Xử lý file (RIP)</h4>
            <p>File thiết kế cần được xuất ở định dạng PNG không nền, hệ màu CMYK và độ phân giải tối thiểu 300 DPI. Phần mềm RIP (Raster Image Processor) sẽ tiếp nhận file, tạo ra một lớp lót trắng (White Base) tự động cho hình in. Lớp trắng này cực kỳ quan trọng, nó giúp hình in hiển thị đúng màu trên nền vải tối.</p>

            <h4>Bước 2: In lên màng PET</h4>
            <p>Máy in phun chuyên dụng sẽ in các hạt mực CMYK lên màng PET trước, sau đó in lớp mực trắng phủ lên trên. Tốc độ và độ chính xác của đầu phun quyết định độ sắc nét của hình ảnh.</p>

            <h4>Bước 3: Rắc bột và Sấy khô</h4>
            <p>Ngay khi mực còn ướt, màng in đi qua máy rắc bột tự động. Bột TPU (keo chuyển nhiệt) sẽ bám vào phần mực ướt. Sau đó, màng đi qua buồng sấy ở nhiệt độ cao (thường là 120-150 độ C) để làm chín mực và tan chảy bột keo, tạo thành một lớp màng dẻo dai.</p>

            <h4>Bước 4: Ép nhiệt lên áo</h4>
            <p>Đây là bước cuối cùng và đơn giản nhất. Bạn chỉ cần đặt màng in lên vị trí mong muốn trên áo, dùng máy ép nhiệt ép ở nhiệt độ 160 độ C trong 12-15 giây. Sau khi ép, để nguội hoàn toàn rồi lột bỏ lớp màng PET. Để tăng độ bền, bạn nên ép lại lần 2 trong 5 giây với một tờ giấy nến lót lên trên.</p>

            <h3>3. Ưu nhược điểm bạn cần cân nhắc</h3>
            <p><strong>Ưu điểm:</strong></p>
            <ul>
                <li><strong>Không giới hạn màu sắc:</strong> In được chuyển sắc (gradient), hiệu ứng 3D, chi tiết siêu nhỏ.</li>
                <li><strong>Không kén vải:</strong> In tốt trên Cotton, Poly, Nylon, Canvas, Da...</li>
                <li><strong>Chi phí thấp cho đơn lẻ:</strong> Không tốn tiền làm khung in, in 1 áo cũng được.</li>
                <li><strong>Độ bền cao:</strong> Mực in dẻo, đàn hồi tốt theo thớ vải, không bị nứt gãy khi kéo giãn.</li>
            </ul>

            <p><strong>Nhược điểm:</strong></p>
            <ul>
                <li><strong>Độ thoáng khí:</strong> Do có lớp keo dẻo, hình in PET sẽ hơi bí hơn in lụa mực nước (nhưng thoáng hơn decal).</li>
                <li><strong>Kích thước:</strong> Thường bị giới hạn bởi khổ máy in (khổ 60cm).</li>
            </ul>

            <div style="background: #333; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                <h4 style="color: var(--primary-color); margin-top: 0;">Lời kết</h4>
                <p style="margin-bottom: 0;">In PET là giải pháp hoàn hảo cho các Local Brand khởi nghiệp, các shop làm áo theo yêu cầu (POD) hoặc làm đồng phục số lượng ít đến trung bình. Tại Printhub, chúng tôi cung cấp dịch vụ in PET gia công chất lượng cao với máy móc 2026 hiện đại nhất.</p>
            </div>
        `
    },
    {
        id: 2,
        title: "So sánh in PET chuyển nhiệt và In lụa: Đâu là lựa chọn tối ưu?",
        excerpt: "Phân tích chi tiết về chi phí, độ bền và chất lượng để bạn chọn công nghệ phù hợp nhất cho BRAND của mình.",
        date: "05/01/2026",
        category: "Kiến thức in ấn",
        image: "assets/images/ink.png",
        content: `
            <p class="lead">Khi bắt đầu sản xuất áo thun, câu hỏi đầu tiên của 99% chủ brand là: "Nên in lụa hay in PET?". Cả hai công nghệ này đều đang thống trị thị trường, nhưng chúng phục vụ những mục đích hoàn toàn khác nhau. Bài viết này sẽ đặt lên bàn cân hai "đối thủ" này để bạn có cái nhìn khách quan nhất.</p>

            <h3>1. Về nguyên lý hoạt động</h3>
            <p><strong>In lụa (Screen Printing):</strong> Là kỹ thuật lâu đời, sử dụng khuôn in (khung lụa) để định vị hình in. Mực được gạt qua lưới in thấm xuống vải. Mỗi màu sắc cần một khuôn in riêng biệt.</p>
            <p><strong>In PET (DTF):</strong> Là kỹ thuật kỹ thuật số. Máy in phun mực lên màng nilon, sau đó dùng nhiệt ép sang áo. Không cần khuôn bản, mọi thứ được xử lý trên máy tính.</p>

            <h3>2. So sánh chi tiết</h3>
            
            <h4>Màu sắc và Độ chi tiết</h4>
            <p>Ở hạng mục này, <strong>In PET thắng tuyệt đối</strong>. In PET có thể tái tạo hàng triệu màu sắc, các hiệu ứng chuyển màu (gradient) mượt mà và các chi tiết mảnh nhỏ tới 0.5mm. In lụa bị giới hạn bởi số lượng màu (thường dưới 8 màu để tối ưu chi phí) và rất khó để in tram (hình ảnh thật) nếu thợ không có tay nghề cao.</p>

            <h4>Độ bền</h4>
            <p><strong>In lụa nhỉnh hơn</strong>. Mực in lụa (đặc biệt là mực Plastisol) có thể thấm sâu vào sớ vải và có tuổi thọ gần như vĩnh cửu cùng chiếc áo. In PET hiện đại đã cải thiện độ bền rất nhiều (có thể giặt máy 50-70 lần), nhưng về bản chất nó là một lớp màng dán lên vải bằng keo, nên theo thời gian dài có thể bị bong tróc nếu bảo quản sai cách.</p>

            <h4>Cảm giác khi mặc (Hand-feel)</h4>
            <p>In lụa mực nước (Water-based) cho cảm giác in như không in, rất thoáng mát. In lụa Plastisol và In PET đều để lại một lớp mực trên bề mặt, nhưng in PET thường mỏng và mềm hơn so với các mảng in lụa Plastisol dày cộp.</p>

            <h4>Chi phí và Số lượng</h4>
            <p>Đây là yếu tố quyết định:</p>
            <ul>
                <li><strong>Dưới 50 áo:</strong> In PET rẻ hơn nhiều vì không tốn tiền chụp bản in (mỗi bản in lụa tốn 150k-300k).</li>
                <li><strong>Trên 100 áo:</strong> In lụa rẻ hơn đáng kể. Số lượng càng lớn, in lụa càng rẻ (có thể chỉ vài ngàn đồng/màu).</li>
            </ul>

            <h3>3. Khi nào nên chọn gì?</h3>
            <p><strong>Chọn in PET khi:</strong></p>
            <ul>
                <li>Bạn làm áo mẫu, áo lớp, áo đồng phục số lượng ít (< 50 cái).</li>
                <li>Hình in của bạn có quá nhiều màu, có hiệu ứng 3D, Galaxy, Chibi...</li>
                <li>Bạn kinh doanh mô hình Pre-order (có đơn mới in).</li>
            </ul>

            <p><strong>Chọn in lụa khi:</strong></p>
            <ul>
                <li>Bạn sản xuất số lượng lớn (> 100 cái) để tối ưu lợi nhuận.</li>
                <li>Thiết kế của bạn đơn giản (Typo text, Logo mảng khối, ít màu).</li>
                <li>Bạn cần độ bền "nồi đồng cối đá" cho đồ bảo hộ lao động hoặc hàng cao cấp cần độ thấm hút tốt (dùng mực nước).</li>
            </ul>

            <p>Tại Printhub, chúng tôi chuyên sâu về mảng in PET để phục vụ sự linh hoạt của thị trường Local Brand hiện đại. Tuy nhiên, chúng tôi luôn tư vấn trung thực dựa trên nhu cầu thực tế của khách hàng.</p>
        `
    },
    {
        id: 3,
        title: "5 Xu hướng thiết kế áo thun Local Brand 'thống trị' năm 2026",
        excerpt: "Cyberpunk, Retro Typography hay Minimalism? Cập nhật ngay để không bị bỏ lại phía sau.",
        date: "04/01/2026",
        category: "Xu hướng thiết kế",
        image: "assets/images/tshirt_showcase.png",
        content: `
            <p class="lead">Thời trang là sự xoay vòng, nhưng công nghệ in ấn 2026 đã cho phép các nhà thiết kế Local Brand Việt Nam sáng tạo không giới hạn. Năm nay, chúng ta chứng kiến sự lên ngôi của những phong cách táo bạo, cá tính và đậm chất kỹ thuật số. Dưới đây là 5 xu hướng đang làm mưa làm gió trên các kệ hàng.</p>

            <h3>1. Acid/Chrome Graphics (Đồ họa kim loại lỏng)</h3>
            <p>Lấy cảm hứng từ thẩm mỹ Y2K và Futurism, các thiết kế sử dụng font chữ dạng kim loại sắc nhọn, hiệu ứng chrome bóng loáng đang cực kỳ thịnh hành. Những hình khối 3D méo mó, chảy lỏng tạo cảm giác siêu thực.</p>
            <p><strong>Ứng dụng in PET:</strong> Công nghệ in PET thể hiện xuất sắc độ bóng (glossy) và các dải màu kim loại giả lập này, điều mà in lụa rất vất vả mới làm được.</p>

            <h3>2. Bootleg Vintage 90s</h3>
            <p>Phong cách áo thun in hình các rapper, vận động viên hoặc nhân vật phim ảnh thập niên 90 với bố cục collage (cắt dán) lộn xộn, nhiều hình ảnh chồng chéo. Đặc trưng là màu sắc rực rỡ nhưng được xử lý noise (nhiễu hạt) để trông cũ kỹ.</p>
            <p>Đây là sân chơi độc tôn của in PET vì một thiết kế Bootleg thường chứa hàng chục bức ảnh lồng ghép với dải màu vô hạn.</p>

            <h3>3. Cyberpunk & Glitch Art</h3>
            <p>Với sự ảnh hưởng của AI và công nghệ, phong cách Cyberpunk với màu Neon (xanh lá, hồng tím) trên nền áo đen tiếp tục hot. Hiệu ứng Glitch (lỗi màn hình), mã code, mạch điện tử được tận dụng triệt để.</p>
            <p>Lưu ý khi thiết kế: Cần đẩy độ tương phản của layer Neon lên cao nhất để khi in ra trên nền vảo đen, hình in thực sự "phát sáng".</p>

            <h3>4. Typographic Chaos (Typography hỗn loạn)</h3>
            <p>Quên đi những quy tắc căn chỉnh lề lối. Xu hướng năm nay là sử dụng Typography bị bóp méo, kéo dãn, sắp xếp lộn xộn có chủ đích, kết hợp nhiều font chữ (Serif và Sans-serif) trong cùng một thiết kế để tạo thị giác mạnh.</p>

            <h3>5. Mascot & Cartoon (Hoạt hình hóa)</h3>
            <p>Các Brand đang xây dựng linh vật (Mascot) riêng theo phong cách Rubber hose (hoạt hình thập niên 30) hoặc Graffiti. Những nhân vật này giúp thương hiệu trở nên thân thiện và dễ nhớ hơn.</p>

            <div style="background: #333; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                <h4 style="color: var(--primary-color); margin-top: 0;">Mẹo từ Printhub</h4>
                <p style="margin-bottom: 0;">Dù theo đuổi xu hướng nào, hãy nhớ rằng kỹ thuật in quyết định 50% vẻ đẹp của thiết kế. Một thiết kế Chrome 3D sẽ "chết chìm" nếu in bằng công nghệ in lụa chồng màu sai lệch. Hãy để Printhub giúp bạn hiện thực hóa ý tưởng một cách hoàn hảo nhất.</p>
            </div>
        `
    },
    {
        id: 4,
        title: "Bí quyết bảo quản hình in PET bền đẹp như mới",
        excerpt: "Hướng dẫn giặt ủi đúng cách để chiếc áo yêu thích của bạn luôn giữ được màu sắc tươi sáng.",
        date: "03/01/2026",
        category: "Kiến thức in ấn",
        image: "assets/images/film.png",
        content: `
            <p class="lead">"Của bền tại người". Dù công nghệ in PET 2026 đã cải tiến vượt bậc về độ bền, nhưng một chiếc áo in có giữ được vẻ đẹp sau 6 tháng hay 1 năm hay không phụ thuộc hoàn toàn vào cách bạn giặt và bảo quản nó. Bài viết này là cẩm nang chăm sóc áo mà mọi khách hàng của Printhub nên biết.</p>

            <h3>1. Quy tắc "bất di bất dịch" khi giặt</h3>
            
            <h4>Lần giặt đầu tiên</h4>
            <p>Áo mới in xong, mực và keo cần thời gian để ổn định cấu trúc bám vào sợi vải. <strong>Tuyệt đối không giặt áo trong vòng 48h - 72h sau khi ép</strong>. Nếu bạn giặt ngay, hóa chất và tác động vật lý có thể làm bong lớp keo non.</p>
            <p>Lần đầu tiên chỉ nên ngâm xả nhẹ với nước lạnh, không dùng bột giặt.</p>

            <h4>Lộn trái áo (Inside Out)</h4>
            <p>Đây là quy tắc vàng. Việc lộn mặt trái áo ra ngoài giúp hình in không bị ma sát trực tiếp với thành lồng giặt hoặc cọ xát với các quần áo khác (đặc biệt là dây kéo, khuy nút). Nó giúp hạn chế 90% nguy cơ hình in bị trầy xước.</p>

            <h4>Nhiệt độ nước</h4>
            <p>Luôn giặt nước lạnh hoặc nước ấm dưới 40 độ C. Nước nóng là kẻ thù của keo in PET. Nhiệt độ cao làm keo mềm ra và dễ bị bong tróc khỏi sợi vải.</p>

            <h4>Hóa chất tẩy rửa</h4>
            <p>Tránh xa thuốc tẩy (Bleach) hoặc bột giặt có tính tẩy quá mạnh. Chúng không chỉ làm phai màu vải mà còn làm biến đổi màu sắc của mực in PET, khiến màu đen biến thành nâu hoặc đỏ.</p>

            <h3>2. Phơi và Ủi đúng cách</h3>
            <p><strong>Phơi:</strong> Tránh phơi trực tiếp dưới ánh nắng gắt mặt trời trong thời gian dài. Tia UV có thể làm giòn lớp mực in. Nên phơi trong bóng râm và phơi ngang áo (vắt ngang sào) để tránh áo bị giãn cổ, nhưng vẫn phải nhớ duy trì việc lộn trái áo.</p>
            
            <p><strong>Ủi (Là):</strong> Tuyệt đối <strong>KHÔNG ủi trực tiếp lên hình in</strong>. Nhiệt độ bàn ủi thường > 200 độ C, trong khi keo in PET tan chảy ở 130-150 độ C. Nếu bạn ủi lên, hình in sẽ dính chặt vào bàn ủi và hỏng ngay lập tức.</p>
            <p>Cách xử lý: Ủi mặt trái của khu vực có hình in, hoặc lót một tờ giấy nến/vải cotton mỏng lên trên hình in trước khi ủi.</p>

            <h3>3. Xử lý khi hình in bị nhăn/gấp nếp</h3>
            <p>Sau khi giặt hoặc gấp tủ lâu ngày, hình in PET khổ lớn có thể bị nhăn hoặc gấp nếp. Đừng lo lắng, hãy làm như sau:</p>
            <ul>
                <li>Lót một tờ giấy nến lên hình in.</li>
                <li>Dùng bàn ủi ở nhiệt độ trung bình, ủi nhẹ qua lại trong 5-10 giây.</li>
                <li>Hơi nóng sẽ làm lớp keo mềm nhẹ ra và phẳng lại như ban đầu. Dùng vật nặng phẳng đè lên trong lúc chờ nguội để cố định form.</li>
            </ul>
        `
    },
    {
        id: 5,
        title: "Khởi nghiệp Local Brand: Bài toán tối ưu chi phí in ấn",
        excerpt: "Làm sao để có lợi nhuận khi mới bắt đầu với số vốn nhỏ? Câu trả lời nằm ở quy trình in ấn.",
        date: "02/01/2026",
        category: "Kinh doanh Local Brand",
        image: "assets/images/powder.png",
        content: `
            <p class="lead">Bài toán đau đầu nhất của các Founder Local Brand trẻ là: "Vốn ít, không dám in nhiều, nhưng in ít thì giá vốn cao, bán không có lời". Vòng luẩn quẩn này đã giết chết nhiều thương hiệu tiềm năng. Công nghệ in PET chính là chìa khóa để phá vỡ vòng vây này.</p>

            <h3>1. Bẫy "Tồn kho" (Inventory Trap)</h3>
            <p>Cách làm truyền thống: Bạn đặt may và in sẵn 100 áo (để có giá in lụa rẻ). Bạn bán được 30 áo, còn tồn 70 áo. Lợi nhuận từ 30 áo không đủ bù chi phí vốn của 70 áo tồn kho. Bạn lỗ và cụt vốn.</p>
            <p>Giải pháp 2026: Mô hình <strong>Print-on-Demand (POD) lai</strong>.</p>
            
            <h3>2. Quy trình tối ưu chi phí với Printhub</h3>
            <p>Thay vì in thành phẩm, hãy làm theo quy trình sau:</p>

            <h4>Bước 1: Stock phôi áo (Base)</h4>
            <p>Đặt may/nhập sẵn phôi áo trơn chất lượng tốt (Cotton 2 chiều/4 chiều) với các màu cơ bản (Đen, Trắng, Kem). Phôi áo trơn không bao giờ lỗi mốt và có thể dùng cho mọi bộ sưu tập.</p>

            <h4>Bước 2: In màng PET dự trữ</h4>
            <p>Thay vì in lên áo, bạn đặt Printhub in thiết kế lên màng PET. 
            <br>Chi phí in màng PET cực rẻ (chỉ khoảng 80k-120k/mét). Một mét khổ 60cm có thể xếp được 6-8 hình in ngực hoặc 2-3 hình in lưng lớn.
            <br>Tính ra, chi phí hình in chỉ từ 10k - 40k/áo. Quan trọng là màng in này có thể cuộn lại để đó 1-2 năm không hỏng.</p>

            <h4>Bước 3: Ép khi có đơn (Just-in-Time)</h4>
            <p>Khi khách đặt đơn hàng, bạn mới lấy phôi áo ra, cắt hình từ màng PET và dùng máy ép nhiệt (đầu tư chỉ 2-3 triệu) để ép lên. Thời gian xử lý chỉ 5 phút.</p>

            <h3>3. Lợi ích khổng lồ</h3>
            <ul>
                <li><strong>Giảm rủi ro tồn kho bằng 0:</strong> Áo chưa in hình thì vẫn là áo trơn, có thể dùng cho mẫu khác. Màng in tồn kho chiếm cực ít diện tích và giá trị thấp.</li>
                <li><strong>Đa dạng mẫu mã:</strong> Bạn có thể đăng bán 50 mẫu thiết kế trên web, nhưng không cần in sẵn cái nào. Khách thích mẫu nào bạn ép mẫu đó.</li>
                <li><strong>Tùy biến cao:</strong> Khách muốn in hình đó lên áo đen hay áo trắng, size M hay XL đều được. Bạn không bị giới hạn bởi việc đã lỡ in lên áo size L màu đen rồi.</li>
            </ul>

            <div style="background: #333; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                <h4 style="color: var(--primary-color); margin-top: 0;">Printhub hỗ trợ bạn thế nào?</h4>
                <p style="margin-bottom: 0;">Chúng tôi nhận in gia công màng PET số lượng ít, hỗ trợ ghép file tiết kiệm diện tích màng in. Bạn gửi file, chúng tôi gửi màng in tận nhà. Đây là cách thông minh nhất để khởi nghiệp thời trang 2026.</p>
            </div>
        `
    },
    {
        id: 6,
        title: "Review chi tiết các loại mực in PET phổ biến trên thị trường",
        excerpt: "Mực Hàn, Mực Trung hay Mực Đức? Loại nào cho màu sắc đẹp nhất?",
        date: "01/01/2026",
        category: "Kiến thức in ấn",
        image: "assets/images/ink.png",
        content: `
            <p class="lead">Thị trường vật tư in PET hiện nay như một "ma trận" với đủ mức giá và nguồn gốc: Trung Quốc, Hàn Quốc, Nhật Bản, Mỹ... Nhiều xưởng in vì chạy theo lợi nhuận đã sử dụng mực rẻ tiền, dẫn đến sản phẩm kém chất lượng. Vậy sự khác biệt thực sự nằm ở đâu?</p>

            <h3>1. Cấu tạo của mực in PET</h3>
            <p>Mực in PET là loại mực gốc nước (Water-based pigment ink) được bổ sung các phụ gia liên kết đặc biệt để bám được lên màng nhựa và chịu nhiệt. Một bộ mực chuẩn bao gồm 5 màu: C (Xanh), M (Hồng), Y (Vàng), K (Đen) và W (Trắng).</p>

            <h3>2. Phân loại và Đánh giá</h3>

            <h4>Mực Trung Quốc giá rẻ (Loại thường)</h4>
            <p>Giá thành rất hấp dẫn (chỉ 200k-300k/lít). Rất phổ biến ở các xưởng in cạnh tranh về giá.</p>
            <ul>
                <li><strong>Ưu điểm:</strong> Giá rẻ, dễ mua.</li>
                <li><strong>Nhược điểm:</strong> Hạt mực to, dễ gây tắc đầu phun máy in. Màu sắc xỉn, không tươi, đặc biệt màu đỏ thường bị ám cam. Độ bền kém, dễ bị nứt sau vài lần giặt.</li>
            </ul>

            <h4>Mực Trung Quốc Cao cấp (Premium)</h4>
            <p>Đây là loại Printhub đang sử dụng cho các dòng sản phẩm tiêu chuẩn.</p>
            <ul>
                <li><strong>Đặc điểm:</strong> Hạt mực mịn, độ bão hòa màu cao. Màu trắng có độ che phủ tốt (không bị lộ nền áo).</li>
                <li><strong>Độ bền:</strong> Đạt tiêu chuẩn giặt máy > 40 lần.</li>
            </ul>

            <h4>Mực Hàn Quốc / Nhật Bản</h4>
            <p>Phân khúc cao cấp, giá thành gấp 2-3 lần mực thường.</p>
            <ul>
                <li><strong>Ưu điểm:</strong> Màu sắc rực rỡ tuyệt đối, phổ màu (Color Gamut) rất rộng. Mực rất thân thiện với đầu phun máy in Epson. Độ bền màu cực cao, chống tia UV tốt.</li>
                <li><strong>Nhược điểm:</strong> Giá thành cao đẩy giá sản phẩm lên.</li>
            </ul>

            <h3>3. Tầm quan trọng của Mực Trắng (White Ink)</h3>
            <p>Trong in PET, mực trắng đóng vai trò "nền móng". Nó được in lót bên dưới lớp mực màu.
            <br>Nếu mực trắng kém chất lượng (loãng, không đều): Hình in sẽ bị thâm kim (màu vải xuyên qua hình in), màu sắc bên trên không lên đúng tone.
            <br>Nếu mực trắng quá cứng: Hình in sẽ bị dày, cứng như mo cau, gây cảm giác khó chịu khi mặc.</p>

            <div style="background: #333; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                <h4 style="color: var(--primary-color); margin-top: 0;">Cam kết của Printhub</h4>
                <p style="margin-bottom: 0;">Chúng tôi công khai nguồn gốc vật tư. 100% đơn hàng tại Printhub sử dụng hệ mực Premium đạt chứng chỉ Oeko-Tex Standard 100 (an toàn cho da), nói không với mực trôi nổi gây hại đầu phun và uy tín khách hàng.</p>
            </div>
        `
    },
    {
        id: 7,
        title: "Cách xử lý file thiết kế để in PET không bị viền trắng",
        excerpt: "Kỹ thuật Photoshop nâng cao giúp file in của bạn chuyên nghiệp hơn.",
        date: "30/12/2025",
        category: "Xu hướng thiết kế",
        image: "assets/images/tshirt_showcase.png",
        content: `
            <p class="lead">"Viền trắng" (Halo Effect) là lỗi kỹ thuật phổ biến nhất và cũng là "kẻ hủy diệt" thẩm mỹ của mọi hình in PET trên áo đen. Bạn in một hình con rồng cực ngầu, nhưng xung quanh lại có một đường viền trắng li ti bao quanh? Bài viết này sẽ giúp Designer xử lý triệt để vấn đề này.</p>

            <h3>1. Nguyên nhân gây ra viền trắng</h3>
            <p>Trong quy trình in PET, máy sẽ in lớp màu (CMYK) trước, sau đó in lớp lót trắng (White Base) phủ lên trên. Về lý thuyết, lớp trắng phải nằm gọn hoàn toàn bên dưới lớp màu.</p>
            <p>Tuy nhiên, do sai số cơ học của máy in hoặc do sự lan của mực, lớp mực trắng đôi khi bị tràn ra ngoài biên của lớp màu khoảng 0.1mm - 0.2mm. Trên áo đen, đường viền này hiện lên rất rõ.</p>

            <h3>2. Kỹ thuật Choke/Contract (Thu nhỏ lớp trắng)</h3>
            <p>Giải pháp chính là làm cho lớp lót trắng nhỏ hơn lớp màu một chút. Các phần mềm RIP in ấn chuyên nghiệp (như AcroRIP) đều có tính năng này, nhưng Designer nên xử lý từ file gốc để chủ động hơn.</p>
            
            <h4>Cách làm trong Photoshop:</h4>
            <ol>
                <li>Giữ <strong>Ctrl (Cmd) + Click</strong> vào layer hình in để tạo vùng chọn bao quanh hình.</li>
                <li>Vào menu <strong>Select > Modify > Contract</strong>.</li>
                <li>Nhập giá trị <strong>1 đến 2 pixels</strong> (tùy độ phân giải file, file 300dpi nên để 2-3px). Nhấn OK. Vùng chọn sẽ thu hẹp vào trong.</li>
                <li>Tạo một Layer Mask từ vùng chọn mới này, hoặc Invert vùng chọn và xóa phần viền thừa đi.</li>
            </ol>
            <p>Tuy nhiên, cách này làm mất chi tiết ở viền. Kỹ thuật cao hơn là xử lý Transparency.</p>

            <h3>3. Xử lý các thiết kế dạng khói/lửa (Semi-transparent)</h3>
            <p>Với các thiết kế có độ mờ (opacity < 100%) như khói, sương mù, bóng đổ, in PET rất dễ bị lỗi lốm đốm trắng.</p>
            <p><strong>Bí quyết:</strong> Không bao giờ để Opacity quá thấp (< 20%). Máy in sẽ không thể phun lớp lót trắng cho các điểm ảnh quá mờ này. Thay vào đó, hãy dùng kỹ thuật Halftone (tạo hạt tram) để giả lập độ mờ. Các điểm tram sẽ đủ dày để máy in phủ mực trắng, tạo hiệu ứng chuyển sắc mượt mà mà không bị lỗi.</p>

            <h3>4. Kiểm tra trước khi gửi file</h3>
            <p>Luôn tạo một layer màu đen bên dưới layer thiết kế trong Photoshop để kiểm tra (Check background). Phóng to 300% ở các cạnh viền. Nếu thấy các pixel trắng lem nhem (anti-aliasing) quá nhiều, hãy dùng cục tẩy mềm (Eraser) hoặc Mask để làm sạch. Một file sạch nền là yếu tố tiên quyết cho hình in đẹp.</p>
        `
    },
    {
        id: 8,
        title: "Tại sao nên chọn Printhub cho đơn hàng in gia công của bạn?",
        excerpt: "Cam kết chất lượng, tốc độ và giá thành cạnh tranh nhất thị trường.",
        date: "29/12/2025",
        category: "Tin tức Printhub",
        image: "assets/images/hero.png",
        content: `
            <p class="lead">Giữa hàng trăm xưởng in lớn nhỏ tại Việt Nam, đâu là lý do khiến hơn 500+ Local Brand tin tưởng lựa chọn Printhub làm đối tác sản xuất chiến lược? Không chỉ là in ấn, chúng tôi cung cấp giải pháp toàn diện cho doanh nghiệp thời trang.</p>

            <h3>1. Hệ thống máy móc Top 1 thị trường</h3>
            <p>Printhub không dùng máy in chế (máy Epson văn phòng độ lại). Chúng tôi đầu tư hệ thống máy in công nghiệp khổ lớn 60cm sử dụng đầu phun <strong>Epson i3200</strong> mới nhất năm 2026.
            <br>Ưu điểm: Tốc độ in nhanh gấp 10 lần máy thường, độ phân giải thực 1440dpi cho chi tiết sắc nét như ảnh chụp, và độ ổn định màu sắc tuyệt đối (1000 áo màu giống nhau cả 1000).</p>

            <h3>2. Quy trình kiểm soát chất lượng (QC) 3 vòng</h3>
            <p>Chúng tôi hiểu nỗi đau của khách hàng khi nhận hàng lỗi. Tại Printhub, đơn hàng đi qua 3 cổng kiểm soát:</p>
            <ul>
                <li><strong>QC File:</strong> Kỹ thuật viên kiểm tra file, cảnh báo độ phân giải thấp hoặc lỗi viền trắng trước khi in.</li>
                <li><strong>QC Màng in:</strong> Kiểm tra màng sau khi sấy. Loại bỏ các đoạn bị lé màu, chín bột không đều.</li>
                <li><strong>QC Thành phẩm:</strong> Kiểm tra độ bám dính sau khi ép nhiệt lên áo (Test độ bám ngẫu nhiên).</li>
            </ul>

            <h3>3. Tốc độ là vàng</h3>
            <p>Trong ngành thời trang nhanh (Fast Fashion), trễ 1 ngày là mất trend.
            <br>Thời gian sản xuất chuẩn của chúng tôi:
            <br>- Đơn mẫu/Lẻ (< 10m): Giao trong 12-24h.
            <br>- Đơn sỉ (100m - 500m): Giao trong 2-3 ngày.
            <br>- Dịch vụ hỏa tốc: In lấy ngay sau 4 tiếng.</p>

            <h3>4. Chính sách bảo hành rõ ràng</h3>
            <p>Printhub cam kết bảo hành hình in 6 tháng về độ bền (không bong tróc, nứt gãy) nếu khách hàng tuân thủ hướng dẫn giặt ủi.
            <br>Sẵn sàng in lại 1-đổi-1 hoặc hoàn tiền 100% nếu sai màu quá 10% so với file thiết kế hoặc sai kích thước yêu cầu.</p>

            <div style="background: #333; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                <h4 style="color: var(--primary-color); margin-top: 0;">Kết nối ngay</h4>
                <p style="margin-bottom: 0;">Đừng để rào cản sản xuất kìm hãm sự sáng tạo của Brand. Hãy để Printhub lo phần kỹ thuật, bạn chỉ cần tập trung bán hàng.</p>
            </div>
        `
    },
    {
        id: 9,
        title: "Giải mã cơn sốt 'Áo thun Vintage' và cách in giả cổ",
        excerpt: "Làm sao để tạo hiệu ứng nứt, cũ kỹ đúng chất Retro trên áo thun mới?",
        date: "28/12/2025",
        category: "Xu hướng thiết kế",
        image: "assets/images/tshirt_showcase.png",
        content: `
            <p class="lead">Áo thun Vintage (hoặc Secondhand) với chất vải wash bạc màu và hình in nứt nẻ (cracked) đang được săn lùng ráo riết. Nhưng nguồn hàng 2hand có hạn và form dáng không phù hợp. Các Brand chọn cách sản xuất áo mới nhưng "giả cổ" (Faux Vintage). Làm sao để in PET - công nghệ in hiện đại, bóng bẩy - lại ra được chất cổ điển này?</p>

            <h3>1. Xử lý từ khâu thiết kế (Texture overlays)</h3>
            <p>Đừng gửi một file vector phẳng lì đi in. Để ra chất vintage, bạn cần add các lớp Texture (kết cấu) lên trên thiết kế:</p>
            <ul>
                <li><strong>Grunge Texture:</strong> Tạo các vết xước, vết bẩn ngẫu nhiên.</li>
                <li><strong>Halftone Pattern:</strong> Chuyển hình ảnh sang dạng hạt tram (chấm bi) li ti, mô phỏng kỹ thuật in báo chí cũ.</li>
                <li><strong>Cracked Texture:</strong> Đây là quan trọng nhất. Phủ một lớp texture vết nứt lên toàn bộ hình in. Khi in ra, những vết nứt này sẽ là khoảng trống (nhìn thấy màu vải bên dưới), tạo cảm giác hình in đã bị lão hóa theo thời gian.</li>
            </ul>

            <h3>2. Chọn chế độ in mỏng (Low Ink Density)</h3>
            <p>Hãy yêu cầu xưởng in (Printhub) giảm lượng mực in xuống khoảng 70-80%. Hình in sẽ mỏng hơn, ăn vào vải hơn và màu sắc sẽ bớt rực rỡ, hơi trầm xuống (faded), đúng chất màu của những năm 90.</p>

            <h3>3. Kỹ thuật ép nhiệt tạo bề mặt lì (Matte Finish)</h3>
            <p>Màng in PET thông thường khi lột ra sẽ có độ bóng nhẹ. Để làm mất độ bóng này:
            <br>- Sau khi lột màng, hãy ép lại lần 2 (pressing) trong 5 giây.
            <br>- Quan trọng: Dùng một tờ vải thô hoặc giấy Kraft nhám lót lên trên khi ép lại. Bề mặt nhám của giấy sẽ in hằn lên lớp keo nóng chảy, làm cho hình in trở nên lì (matte) và sần sùi, tệp hoàn toàn vào thớ vải cotton.</p>

            <h3>4. Wash áo thành phẩm</h3>
            <p>Nếu có điều kiện, sau khi in xong, hãy đem áo đi wash công nghiệp (Enzyme wash hoặc Stone wash). Quá trình đánh đá sẽ làm sờn mặt vải và mài mòn nhẹ hình in một cách tự nhiên nhất. Lưu ý phải test kỹ độ bền mực in trước khi wash hàng loạt.</p>
        `
    },
    {
        id: 10,
        title: "Tổng hợp các lỗi thường gặp khi ép nhiệt áo thun và cách khắc phục",
        excerpt: "Hình in bị bong tróc, nhăn nheo? Xem ngay để biết nguyên nhân.",
        date: "27/12/2025",
        category: "Kiến thức in ấn",
        image: "assets/images/film.png",
        content: `
            <p class="lead">Bạn nhận màng in PET rất đẹp, nhưng khi ép lên áo lại bị lỗi: bong mép, bề mặt sần sùi, hoặc hình in bị biến dạng? 80% lỗi nằm ở kỹ thuật ép nhiệt chứ không phải do màng in. Dưới đây là bảng tổng hợp các "bệnh" thường gặp và cách chữa trị.</p>

            <h3>1. Hình in bị bong mép sau khi lột</h3>
            <p><strong>Nguyên nhân:</strong> Chưa đủ nhiệt độ hoặc lực ép quá yếu.</p>
            <p><strong>Khắc phục:</strong>
            <br>- Kiểm tra lại đồng hồ nhiệt. Nhiều máy ép rẻ tiền báo 160 độ nhưng thực tế chỉ 140 độ. Hãy dùng súng bắn nhiệt hồng ngoại để đo mặt mâm.
            <br>- Tăng lực ép (vặn núm xoay). Lực ép chuẩn là khi bạn phải dùng sức tương đối mạnh mới khóa được cần gạt xuống (khoảng 4-6kg áp lực).</p>

            <h3>2. Hình in bị lỗ rỗ li ti, không láng mịn</h3>
            <p><strong>Nguyên nhân:</strong> Vải áo có quá nhiều lông hoặc độ ẩm cao.</p>
            <p><strong>Khắc phục:</strong>
            <br>- Ép sơ bộ áo (Pre-press): Trước khi đặt hình in lên, hãy ép áo không trong 3-5 giây. Việc này giúp làm phẳng lông vải và bay hơi nước tích tụ trong vải. Một bề mặt khô và phẳng là điều kiện lý tưởng để keo bám dính.</p>

            <h3>3. Hình in dính ngược lên màng PET khi lột (Khó lột)</h3>
            <p><strong>Nguyên nhân:</strong> Lột khi còn nóng (với màng Cold Peel) hoặc chưa nguội hẳn.</p>
            <p><strong>Khắc phục:</strong> Kiên nhẫn! Hãy mang áo ra khỏi máy ép, vẫy nhẹ hoặc áp lên bề mặt đá lạnh/tường mát cho đến khi sờ tay vào thấy mát lạnh hoàn toàn mới được lột. Nếu lột khi keo còn ấm, nó sẽ kéo theo cả hình in lên.</p>

            <h3>4. Hình in bị bóng dầu hoặc đổi màu</h3>
            <p><strong>Nguyên nhân:</strong> Nhiệt độ quá cao hoặc thời gian ép quá lâu (cháy keo, thăng hoa mực).</p>
            <p><strong>Khắc phục:</strong> Giảm nhiệt độ xuống 150-155 độ C. Một số loại vải Poly (màu trắng) dễ bị nhiễm màu (nhiễm sắc) từ dưới lên (gọi là lỗi migration). Với vải này, bạn cần dùng loại bột chống nhiễm (Anti-sublimation powder) màu đen hoặc xám.</p>

            <div style="background: #333; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                <h4 style="color: var(--primary-color); margin-top: 0;">Lưu ý an toàn</h4>
                <p style="margin-bottom: 0;">Máy ép nhiệt là thiết bị công suất lớn và nhiệt cao. Luôn chú ý an toàn điện và tránh để trẻ em lại gần khu vực làm việc.</p>
            </div>
        `
    }
];

window.blogPosts = blogPosts;

function renderBlogPosts() {
    const container = document.getElementById('blog-grid');
    if (!container) return;

    // Sort by ID descending (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) => b.id - a.id);

    container.innerHTML = sortedPosts.map(post => `
        <article class="blog-card" onclick="window.location.href='blog-detail.html?id=${post.id}'">
            <div class="blog-thumb" style="background-image: url('${post.image}')"></div>
            <div class="blog-content">
                <span class="blog-date">${post.date} &bull; ${post.category}</span>
                <h2 class="blog-title">${post.title}</h2>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div style="margin-top: auto;">
                   <span class="btn-outline">Đọc thêm</span>
                </div>
            </div>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
});
