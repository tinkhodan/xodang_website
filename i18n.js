// 1. TỪ ĐIỂN DỮ LIỆU DỊCH
const translations = {
    vi: {
        // Navbar & Hero & Stats & About & Farming
        nav_about: "Câu Chuyện",
        nav_farming: "Canh Tác",
        nav_products: "Sản Phẩm",
        nav_contact: "Liên Hệ",
        btn_buy: "Mua Ngay",
        hero_sub: "Cà Phê Mộc Nguyên Bản",
        hero_title: "Hơi Thở<br>Đại Ngàn Tây Nguyên",
        hero_slogan: '"Hạt cà phê hôm nay, tương lai cho bản làng ngày mai"',
        hero_desc: "Đánh thức giác quan bằng những giọt cà phê chắt chiu từ sương sớm, nắng rát từ vùng đất đỏ bazan huyền thoại",
        btn_explore: "KHÁM PHÁ HƯƠNG VỊ",
        stat_1: "Hái Chín Cây",
        stat_2: "Phụ Gia Tẩm Ướp",
        stat_3: "Quy trình khép kín",
        stat_4: "Rang Mới Mỗi Ngày",
        about_sub: "Câu Chuyện Nông Trại",
        about_title: 'Tinh Hoa Chắt Lọc Từ <span class="highlight">Đất Mẹ</span>',
        about_desc: 'Chúng tôi không chỉ là thợ rang, chúng tôi là những người nông dân thấu hiểu từng nhịp thở của cây cà phê. Xơ Đăng Farm Coffee ra đời với sứ mệnh bảo vệ và lan tỏa hương vị cà phê <strong style="color: var(--forest-main);">mộc mạc, hoang dã nhưng tinh tế nhất</strong>.',
        about_feature1: "Thuận tự nhiên",
        about_feature2: "Phơi nhà kính",
        about_feature3: "Rang thấu hiểu",
        about_feature4: "Sơ chế chuẩn mực",
        about_quote: '"Sơ chế và rang cà phê không chỉ là kỹ thuật, mà là cách chúng tôi kể câu chuyện của đại ngàn."',
        about_founder: 'Đỗ Hữu Nguyên <span style="font-weight: 500; color: #777;">/ Founder & Head Roaster</span>',
        farm_sub: "Gắn Kết Cùng Bản Làng",
        farm_title: 'Nghệ Thuật Canh Tác <span class="highlight">Bền Vững</span>',
        farm_step1_title: "Sinh Trưởng Dưới Tán Rừng Già",
        farm_step1_desc: "Thay vì phát quang đồi trọc, cây cà phê Xơ Đăng được trồng xen canh dưới những tán cây cổ thụ cao lớn. Lối canh tác bảo tồn hệ sinh thái này tạo ra bóng mát lý tưởng, giúp quả cà phê chín chậm hơn, tích tụ lượng đường tự nhiên và hương vị phong phú nhất từ đất mẹ đại ngàn.",
        farm_step2_title: "Chăm Sóc Thuận Tự Nhiên",
        farm_step2_desc: "Người nông dân hoàn toàn không sử dụng phân bón hóa học hay thuốc diệt cỏ độc hại. Cây cà phê được nuôi dưỡng bằng nguồn nước suối nguyên sơ và thảm mùn hữu cơ từ lá rừng rụng xuống. Đây là lời cam kết của chúng tôi về một môi trường xanh và sức khỏe của cộng đồng.",
        farm_step3_title: "Thu Hoạch Trái Chín 100%",
        farm_step3_desc: "Đến mùa thu hoạch, không có bất kỳ máy móc công nghiệp nào xen vào. Từng trái cà phê được đồng bào cẩn thận hái lượm bằng tay, chỉ chọn đúng những quả đã chín đỏ rực, căng mọng. Điều này đòi hỏi công sức gấp nhiều lần, nhưng là quy tắc bất di bất dịch để tạo ra mẻ rang hoàn hảo.",

        // --- PHẦN SẢN PHẨM ---
        prod_sub: "Bộ Sưu Tập Đầy Đủ",
        prod_title: 'Hương Vị Từ <span class="highlight">Rừng Sâu</span>',
        title_1: "Xơ Đăng Classic",
        title_2: "Robusta Honey",
        title_3: "Robusta Natural",
        title_4: "Robusta RoCBK",
        title_5: "Xơ Đăng Signature",
        badge_1: "Pha Phin",
        desc_1: "Sự mạnh mẽ, đầm chắc, hậu vị ngọt sâu lắng. Dành cho những tâm hồn thích sự cổ điển.",
        badge_2: "Đặc Biệt",
        desc_2: "Thơm mùi mật hoa rừng, thể chất dày mượt. Vị ngọt tự nhiên bùng nổ trong vòm họng.",
        badge_3: "Hoang Dã",
        desc_3: "Quả chín phơi nguyên vỏ dưới nắng, mang theo mùi trái cây lên men quyến rũ bí ẩn.",
        badge_4: "Mới Lạ",
        desc_4: "Hạt chế biến chuyên biệt, thích hợp làm các mẻ Cold Brew mát lạnh hoặc công thức phá cách.",
        badge_5: "Cao Cấp",
        desc_5: "Công thức phối trộn độc quyền, cân bằng hoàn hảo giữa chua thanh và đắng ngọt mượt mà.",

        // --- PHẦN HÀNH TRÌNH ---
        trail_sub: "Quy Trình Chuẩn Mực",
        trail_title: "Hành Trình Tìm Hạt Vàng",
        t_step1: "1. Thu Hoạch",
        t_desc1: "Tuyển chọn thủ công những trái chín mọng đỏ rực.",
        t_step2: "2. Sơ Chế Lên Men",
        t_desc2: "Rửa sạch và phơi trên giàn nắng tự nhiên của tự nhiên.",
        t_step3: "3. Rang Thấu Hiểu",
        t_desc3: "Canh lửa tỉ mỉ để đánh thức tiềm năng hương vị.",
        t_step4: "4. Đóng Gói Kín",
        t_desc4: "Túi zip valve 1 chiều giữ trọn hương rừng trao đến bạn.",

        // --- PHẦN BẢN ĐỒ & LIÊN HỆ ---
        map_tag: "Xơ Đăng Farm",
        map_title: "Hệ Thống Xơ Đăng",
        map_f_title: "Nông Trại Sản Xuất",
        map_f_lbl: "Vị trí Farm",
        map_f_val: "Đèo Lò Xo, Kon Tum",
        map_o_title: "Văn Phòng Phân Phối",
        map_o_lbl: "Khu Vực Phân Phối",
        map_o_val: "Đà Nẵng & Giao hàng toàn quốc",
        map_call_lbl: "Hotline Tư Vấn / Đặt Hàng",
        
        // --- PHẦN HÌNH ẢNH THỰC TẾ ---
        gal_sub: "Góc Nhìn Chân Thực",
        gal_title: "Hình Ảnh Thực Tế",

        // --- FOOTER ---
        footer_desc: "Mang hơi thở của đại ngàn Tây Nguyên vào từng tách cà phê mộc mạc của bạn. Đậm đà, nguyên bản và đầy tâm huyết.",
        footer_contact: "LIÊN HỆ",
        footer_address: "Đà Nẵng, Việt Nam",
        footer_products: "SẢN PHẨM",
        footer_prod1: "Cà Phê Pha Phin Classic",

        // --- GIỎ HÀNG & MODAL THÀNH PHẦN ---
        btn_order_now: "ĐẶT MUA NGAY",
        modal_title: "ĐẶT HÀNG NGAY",
        btn_add_cart: "THÊM VÀO GIỎ",
        toast_added: "Đã thêm vào giỏ hàng!",
        modal_cart_title: "GIỎ HÀNG CỦA BẠN",
        cart_total: "Tổng cộng:",
        modal_submit: "CHỐT ĐƠN HÀNG"
    },
    en: {
        // Navbar & Hero & Stats & About & Farming
        nav_about: "Our Story",
        nav_farming: "Farming",
        nav_products: "Products",
        nav_contact: "Contact",
        btn_buy: "Buy Now",
        hero_sub: "Original Specialty Coffee",
        hero_title: "The Breath of<br>Central Highlands",
        hero_slogan: '"Today\'s coffee beans, tomorrow\'s future for our village"',
        hero_desc: "Awaken your senses with coffee drops harvested from early morning dew and intense sunlight of the legendary basalt red soil",
        btn_explore: "EXPLORE FLAVORS",
        stat_1: "Hand-picked Ripe",
        stat_2: "No Additives",
        stat_3: "Closed Process",
        stat_4: "Freshly Roasted",
        about_sub: "Our Farm Story",
        about_title: 'Essence Extracted From <span class="highlight">Mother Earth</span>',
        about_desc: 'We are not just roasters; we are farmers who understand every breath of the coffee tree. Xo Dang Farm Coffee was born with a mission to protect and spread the <strong style="color: var(--forest-main);">most rustic, wild, yet delicate</strong> coffee flavors.',
        about_feature1: "Natural Farming",
        about_feature2: "Greenhouse Drying",
        about_feature3: "Mindful Roasting",
        about_feature4: "Standard Processing",
        about_quote: '"Processing and roasting coffee is not just a technique, it is how we tell the story of the great forest."',
        about_founder: 'Do Huu Nguyen <span style="font-weight: 500; color: #777;">/ Founder & Head Roaster</span>',
        farm_sub: "Connecting with the Village",
        farm_title: 'Sustainable Farming <span class="highlight">Art</span>',
        farm_step1_title: "Growing Under Ancient Forest Canopy",
        farm_step1_desc: "Instead of clearing the hills, Xo Dang coffee trees are intercropped under majestic ancient trees. This ecosystem conservation method provides ideal shade, allowing coffee cherries to ripen slower, accumulate natural sugars, and absorb the richest flavors from mother nature.",
        farm_step2_title: "Natural & Organic Care",
        farm_step2_desc: "Our farmers strictly avoid chemical fertilizers and toxic herbicides. Coffee trees are nourished by pristine stream water and organic humus from fallen forest leaves. This is our commitment to a green environment and community health.",
        farm_step3_title: "100% Ripe Cherry Harvest",
        farm_step3_desc: "During harvest season, no industrial machinery interferes. Each coffee cherry is meticulously hand-picked by local people, selecting only perfectly ripe, juicy red ones. This requires significantly more labor, but remains an iron rule to craft a perfect roast.",

        // --- PHẦN SẢN PHẨM ---
        prod_sub: "Full Collection",
        prod_title: 'Flavors From The <span class="highlight">Deep Forest</span>',
        title_1: "Xo Dang Classic",
        title_2: "Robusta Honey",
        title_3: "Robusta Natural",
        title_4: "Robusta RoCBK",
        title_5: "Xo Dang Signature",
        badge_1: "Phin Filter",
        desc_1: "Strong, bold body with a deep sweet aftertaste. For classic souls.",
        badge_2: "Special",
        desc_2: "Fragrant forest honey aroma, smooth and thick body. Natural sweetness bursts in the palate.",
        badge_3: "Wild",
        desc_3: "Ripe cherries sun-dried whole, carrying a mysteriously captivating fermented fruit aroma.",
        badge_4: "Novelty",
        desc_4: "Specially processed beans, ideal for refreshing Cold Brew batches or unconventional recipes.",
        badge_5: "Premium",
        desc_5: "Exclusive blend, perfectly balancing bright acidity with smooth bittersweetness.",

        // --- PHẦN HÀNH TRÌNH ---
        trail_sub: "Standard Process",
        trail_title: "Journey to Find the Golden Bean",
        t_step1: "1. Harvesting",
        t_desc1: "Hand-picking only the vibrant red, ripe victories.",
        t_step2: "2. Fermentation",
        t_desc2: "Washed and sun-dried on natural drying beds.",
        t_step3: "3. Mindful Roasting",
        t_desc3: "Meticulous heat control to awaken flavor potential.",
        t_step4: "4. Sealed Packaging",
        t_desc4: "One-way valve zip bags preserve the forest aroma delivered to you.",

        // --- PHẦN BẢN ĐỒ & LIÊN HỆ ---
        map_tag: "Xo Dang Farm",
        map_title: "Xo Dang System",
        map_f_title: "Production Farm",
        map_f_lbl: "Farm Location",
        map_f_val: "Lo Xo Pass, Kon Tum",
        map_o_title: "Distribution Office",
        map_o_lbl: "Distribution Area",
        map_o_val: "Da Nang & Nationwide Delivery",
        map_call_lbl: "Consultation / Order Hotline",

        // --- PHẦN BÀN ĐỒ THỰC TẾ ---
        gal_sub: "Authentic Perspectives",
        gal_title: "Real Moments",

        // --- FOOTER ---
        footer_desc: "Bringing the breath of the Central Highlands into your rustic cup of coffee. Bold, original, and full of dedication.",
        footer_contact: "CONTACT",
        footer_address: "Da Nang, Vietnam",
        footer_products: "PRODUCTS",
        footer_prod1: "Classic Phin Filter Coffee",

        // --- GIỎ HÀNG & MODAL THÀNH PHẦN ---
        btn_order_now: "ORDER NOW",
        modal_title: "ORDER NOW",
        btn_add_cart: "ADD TO CART",
        toast_added: "Added to cart!",
        modal_cart_title: "YOUR CART",
        cart_total: "Total:",
        modal_submit: "PLACE ORDER"
    }
};

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key]; 
        }
    });
}