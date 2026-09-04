// CARD DATABASE DATA
const CARDS_DATA = [
  // ==========================================
  // THẺ INCOTERM (11 CARDS)
  // ==========================================
  {
    id: 'incoterm-exw',
    category: 'incoterm',
    categoryText: 'Thẻ Incoterm',
    title: 'EXW (Ex Works)',
    image: 'assets/The Incoterm/EXW.png',
    effect: 'Giao hàng tại xưởng. Người bán chỉ cần chuẩn bị hàng tại kho/xưởng của mình. Người mua chịu toàn bộ chi phí và rủi ro bốc xếp, vận chuyển nội địa, thông quan và vận tải quốc tế.',
    strategy: 'Phù hợp khi người mua có năng lực logistics mạnh tại nước xuất khẩu để chủ động tối ưu chi phí.'
  },
  {
    id: 'incoterm-fca',
    category: 'incoterm',
    categoryText: 'Thẻ Incoterm',
    title: 'FCA (Free Carrier)',
    image: 'assets/The Incoterm/FCA.png',
    effect: 'Giao cho người chuyên chở. Người bán chịu trách nhiệm thông quan xuất khẩu và giao hàng cho đơn vị vận chuyển do người mua chỉ định tại địa điểm thỏa thuận.',
    strategy: 'Được sử dụng rất phổ biến cho mọi phương thức vận tải đa phương thức nhờ tính linh hoạt cao.'
  },
  {
    id: 'incoterm-fas',
    category: 'incoterm',
    categoryText: 'Thẻ Incoterm',
    title: 'FAS (Free Alongside Ship)',
    image: 'assets/The Incoterm/FAS.png',
    effect: 'Giao dọc mạn tàu. Người bán chịu trách nhiệm thông quan xuất khẩu và đặt hàng dọc theo mạn con tàu do người mua chỉ định tại cảng bốc hàng.',
    strategy: 'Thường chỉ áp dụng cho hàng rời, hàng siêu trường siêu trọng vận chuyển bằng đường biển.'
  },
  {
    id: 'incoterm-fob',
    category: 'incoterm',
    categoryText: 'Thẻ Incoterm',
    title: 'FOB (Free On Board)',
    image: 'assets/The Incoterm/FOB.png',
    effect: 'Giao lên tàu. Người bán chịu mọi chi phí và rủi ro cho đến khi hàng hóa được xếp an toàn lên boong tàu tại cảng xuất khẩu chỉ định.',
    strategy: 'Điều khoản kinh điển trong vận tải đường biển. Giúp phân định rõ ràng trách nhiệm tại biên giới lan can tàu.'
  },
  {
    id: 'incoterm-cfr',
    category: 'incoterm',
    categoryText: 'Thẻ Incoterm',
    title: 'CFR (Cost and Freight)',
    image: 'assets/The Incoterm/CFR.png',
    effect: 'Tiền hàng và cước phí. Người bán phải trả chi phí và cước tàu để đưa hàng đến cảng đích chỉ định, nhưng rủi ro tổn thất chuyển sang người mua ngay khi hàng lên tàu.',
    strategy: 'Thích hợp khi người bán muốn chủ động thuê tàu biển nhưng không muốn gánh rủi ro dọc hải trình.'
  },
  {
    id: 'incoterm-cif',
    category: 'incoterm',
    categoryText: 'Thẻ Incoterm',
    title: 'CIF (Cost, Insurance & Freight)',
    image: 'assets/The Incoterm/CIF.png',
    effect: 'Tiền hàng, bảo hiểm và cước phí. Tương tự CFR nhưng người bán bắt buộc phải mua bảo hiểm đường biển tối thiểu để bảo vệ hàng hóa cho người mua.',
    strategy: 'Lựa chọn phổ biến cho các doanh nghiệp xuất khẩu muốn cung cấp dịch vụ trọn gói an toàn qua biển cho khách hàng.'
  },
  {
    id: 'incoterm-cpt',
    category: 'incoterm',
    categoryText: 'Thẻ Incoterm',
    title: 'CPT (Carriage Paid To)',
    image: 'assets/The Incoterm/CPT.png',
    effect: 'Cước phí trả tới. Người bán thanh toán chi phí vận chuyển hàng hóa đến điểm đích quy định, rủi ro chuyển giao khi hàng được giao cho người chuyên chở đầu tiên.',
    strategy: 'Áp dụng hiệu quả cho vận tải đa phương thức (kết hợp bộ, sắt, bay) khi người bán lo cước chặng chính.'
  },
  {
    id: 'incoterm-cip',
    category: 'incoterm',
    categoryText: 'Thẻ Incoterm',
    title: 'CIP (Carriage & Insurance Paid To)',
    image: 'assets/The Incoterm/CIP.png',
    effect: 'Cước phí và bảo hiểm trả tới. Tương tự CPT nhưng người bán phải mua bảo hiểm ở mức tối đa (mức A - All Risks) để bảo vệ quyền lợi người mua.',
    strategy: 'Khuyên dùng cho hàng hóa có giá trị cao, thiết bị công nghệ vận chuyển qua nhiều phương thức phức tạp.'
  },
  {
    id: 'incoterm-dap',
    category: 'incoterm',
    categoryText: 'Thẻ Incoterm',
    title: 'DAP (Delivered At Place)',
    image: 'assets/The Incoterm/DAP.png',
    effect: 'Giao tại nơi đến. Người bán chịu mọi chi phí và rủi ro để đưa hàng đến địa điểm chỉ định tại nước nhập khẩu, sẵn sàng để dỡ khỏi phương tiện vận tải.',
    strategy: 'Người mua tự lo thủ tục thông quan nhập khẩu và thuế, thích hợp khi người mua am hiểu luật hải quan nước mình.'
  },
  {
    id: 'incoterm-dpu',
    category: 'incoterm',
    categoryText: 'Thẻ Incoterm',
    title: 'DPU (Delivered at Place Unloaded)',
    image: 'assets/The Incoterm/DPU.png',
    effect: 'Giao tại địa điểm đã dỡ xuống. Điều khoản duy nhất yêu cầu người bán phải dỡ hàng hóa khỏi phương tiện vận tải xuống bãi nhận hàng tại nước đích.',
    strategy: 'Rất hữu ích khi người bán sở hữu sẵn phương tiện bốc dỡ chuyên dụng hoặc giao hàng tại các ga/cảng hàng không.'
  },
  {
    id: 'incoterm-ddp',
    category: 'incoterm',
    categoryText: 'Thẻ Incoterm',
    title: 'DDP (Delivered Duty Paid)',
    image: 'assets/The Incoterm/DDP.png',
    effect: 'Giao hàng đã thông quan nhập khẩu. Trách nhiệm cao nhất của người bán: chịu mọi chi phí, rủi ro, thông quan và nộp mọi khoản thuế/phí nhập khẩu tại nước đích.',
    strategy: 'Dịch vụ trọn gói tối đa cho người mua. Yêu cầu người bán phải có đại lý hải quan uy tín tại nước nhập khẩu.'
  },

  // ==========================================
  // THẺ EXW - CHỢ (9 CARDS)
  // ==========================================
  {
    id: 'cho-fiata',
    category: 'cho',
    categoryText: 'Thẻ Chợ',
    title: 'Chứng Chỉ FIATA',
    image: 'assets/The Cho/Chứng chỉ FIATA.png',
    effect: 'Nâng cấp uy tín quốc tế cho doanh nghiệp logistics của bạn. Nhận thêm 1 hợp đồng vận tải cao cấp từ ngân hàng trung tâm mỗi khi bắt đầu vòng giao dịch mới.',
    strategy: 'Rất hữu ích vào đầu game để tích lũy hợp đồng giá trị lớn trước khi các tuyến đường bị đối thủ chiếm giữ.'
  },
  {
    id: 'cho-thi-truong',
    category: 'cho',
    categoryText: 'Thẻ Chợ',
    title: 'Cảnh Báo Thị Trường',
    image: 'assets/The Cho/Cảnh báo thị trường.png',
    effect: 'Cho phép bạn bí mật xem trước 3 thẻ Sự Kiện trên cùng của chồng bài rút và sắp xếp lại chúng theo ý muốn.',
    strategy: 'Sử dụng để chuẩn bị phương án đối phó trước các biến cố lớn như Bão nhiệt đới hoặc hướng tai họa về phía đối thủ.'
  },
  {
    id: 'cho-fcl',
    category: 'cho',
    categoryText: 'Thẻ Chợ',
    title: 'FCL Khẩn Cấp',
    image: 'assets/The Cho/FCL khẩn cấp.png',
    effect: 'Chuyển đổi container gom hàng lẻ (LCL) thành container nguyên khối (FCL). Tăng gấp đôi tốc độ di chuyển của phương tiện trong lượt này.',
    strategy: 'Thích hợp khi bạn cần chạy đua thời gian giao hàng để tránh phí phạt lưu bãi phát sinh ở cảng đích.'
  },
  {
    id: 'cho-kiem-dinh',
    category: 'cho',
    categoryText: 'Thẻ Chợ',
    title: 'Kiểm Định Nội Bộ',
    image: 'assets/The Cho/Kiểm định nội bộ.png',
    effect: 'Hủy bỏ hoàn toàn một thẻ Sự Kiện bất lợi liên quan đến Hải quan hoặc Kiểm dịch sinh học vừa áp dụng lên bạn.',
    strategy: 'Hãy giữ thẻ này trên tay như một tấm bùa bảo hộ để tránh bị chôn chân tại biên giới.'
  },
  {
    id: 'cho-kho',
    category: 'cho',
    categoryText: 'Thẻ Chợ',
    title: 'Mở Rộng Kho',
    image: 'assets/The Cho/Mở rộng kho.png',
    effect: 'Nâng cấp sức chứa kho bãi thêm 2 container hàng hóa. Giảm 50% chi phí lưu kho nội bộ cuối lượt.',
    strategy: 'Xây dựng nền móng chuỗi cung ứng vững chắc khi bạn gom lượng lớn hàng xuất khẩu.'
  },
  {
    id: 'cho-nhap-moi',
    category: 'cho',
    categoryText: 'Thẻ Chợ',
    title: 'Nhập Hàng Mới',
    image: 'assets/The Cho/Nhập Hàng Mới.png',
    effect: 'Lập tức rút thêm 2 thẻ Chợ từ chồng bài chung vào tay của bạn.',
    strategy: 'Thẻ tăng tốc tài nguyên đơn giản nhưng hiệu quả cao. Hãy chơi ngay khi có cơ hội.'
  },
  {
    id: 'cho-chay-rong',
    category: 'cho',
    categoryText: 'Thẻ Chợ',
    title: 'Tàu Chạy Rỗng',
    image: 'assets/The Cho/Tàu chạy rỗng.png',
    effect: 'Chấp nhận chịu phạt 10% chi phí vận hành nhưng được phép dịch chuyển tức thời 1 tàu vận tải sang tuyến hàng hải lân cận.',
    strategy: 'Giải pháp khôn ngoan để thoát khỏi kẹt cảng hoặc né tránh vùng biển đang có cướp biển lộng hành.'
  },
  {
    id: 'cho-tang-ca',
    category: 'cho',
    categoryText: 'Thẻ Chợ',
    title: 'Tăng Ca Bốc Dỡ',
    image: 'assets/The Cho/Tăng ca bốc dỡ.png',
    effect: 'Cho phép bốc dỡ hàng hóa khỏi tàu ngay trong lượt hiện tại mà không phải đợi đến chu kỳ lượt sau.',
    strategy: 'Giúp bạn hoàn thành hợp đồng và nhận tiền thưởng ngay lập tức, tối ưu dòng tiền.'
  },
  {
    id: 'cho-dai-ly',
    category: 'cho',
    categoryText: 'Thẻ Chợ',
    title: 'Đại Lý Cảng',
    image: 'assets/The Cho/Đại Lý Cảng.png',
    effect: 'Thuê đại lý ủy quyền tại cảng đích. Giảm vĩnh viễn 50% phí neo đậu và phí bốc xếp container của bạn tại cảng đó.',
    strategy: 'Đầu tư dài hạn cực kỳ sinh lời nếu bạn tập trung khai thác các tuyến hàng hải cố định.'
  },

  // ==========================================
  // THẺ PHƯƠNG TIỆN (10 CARDS)
  // ==========================================
  {
    id: 'pt-1223',
    category: 'phuong-tien',
    categoryText: 'Thẻ Phương Tiện',
    title: 'Hành Trình 1-2-2-3',
    image: 'assets/The Phuong Tien/1 2 2 3-1.png',
    effect: 'Tuyến vận tải kết hợp đường sông và đường bộ tầm trung. Sức tải trung bình nhưng độ linh hoạt cao, ít chịu ảnh hưởng bởi thời tiết xấu.',
    strategy: 'Phù hợp để gom nông sản từ các tỉnh miền Tây về cảng lớn Cát Lái.'
  },
  {
    id: 'pt-1234',
    category: 'phuong-tien',
    categoryText: 'Thẻ Phương Tiện',
    title: 'Chuỗi Đa Phương Thức 1-2-3-4',
    image: 'assets/The Phuong Tien/1 2 3 4.png',
    effect: 'Tuyến logistics hoàn chỉnh kết hợp cả 4 loại hình vận tải: Đường bộ, Đường sắt, Đường thủy và Đường hàng không.',
    strategy: 'Chi phí thiết lập cao nhưng mang lại điểm chiến thắng tối đa khi hoàn thành hợp đồng.'
  },
  {
    id: 'pt-1334',
    category: 'phuong-tien',
    categoryText: 'Thẻ Phương Tiện',
    title: 'Tuyến Đường Biển 1-3-3-4',
    image: 'assets/The Phuong Tien/1 3 3 4.png',
    effect: 'Tuyến biển quốc tế trọng điểm đi qua các cảng biển sâu. Sức chứa khổng lồ lên tới 400 container tiêu chuẩn.',
    strategy: 'Hãy chuẩn bị sẵn thẻ bảo hiểm hoặc Đại lý cảng để tránh tổn thất cước neo tàu.'
  },
  {
    id: 'pt-2233',
    category: 'phuong-tien',
    categoryText: 'Thẻ Phương Tiện',
    title: 'Tuyến Trung Chuyển 2-2-3-3',
    image: 'assets/The Phuong Tien/2 2 3 3.png',
    effect: 'Tuyến kết nối các cảng cạn ICD với ga tàu hỏa. Đảm bảo luồng hàng lưu thông ổn định, không bị tắc nghẽn giao thông đô thị.',
    strategy: 'Lựa chọn an toàn khi đô thị đang xảy ra Sự Kiện tắc đường nội địa.'
  },
  {
    id: 'pt-2234',
    category: 'phuong-tien',
    categoryText: 'Thẻ Phương Tiện',
    title: 'Hành Trình Vận Tải 2-2-3-4',
    image: 'assets/The Phuong Tien/2 2 3 4.png',
    effect: 'Tuyến vận tải đường sắt Bắc-Nam kết hợp xe container đầu kéo giao nhận tận nơi cửa kho.',
    strategy: 'Có lợi thế lớn về tốc độ và chi phí cố định cho các đơn hàng cự ly dài.'
  },
  {
    id: 'pt-2333',
    category: 'phuong-tien',
    categoryText: 'Thẻ Phương Tiện',
    title: 'Hành Trình Giao Hàng 2-3-3-3',
    image: 'assets/The Phuong Tien/2 3 3 3.png',
    effect: 'Tuyến vận tải tập trung vào dung tích trung bình lớn. Đảm bảo năng lực bốc xếp ổn định và đồng đều giữa các lượt.',
    strategy: 'Thích hợp khi mọi người đều có nhu cầu giao hàng vừa phải và ổn định.'
  },
  {
    id: 'pt-2334',
    category: 'phuong-tien',
    categoryText: 'Thẻ Phương Tiện',
    title: 'Chuỗi Logistics 2-3-3-4',
    image: 'assets/The Phuong Tien/2 3 3 4.png',
    effect: 'Kết hợp vận tải thủy nội địa với đội xe trung chuyển linh hoạt, tăng cường khả năng chuyên chở container tải trọng lớn.',
    strategy: 'Thích hợp để chiếm ưu thế bốc dỡ hàng tại các cảng Nhóm C hoặc Nhóm D.'
  },
  {
    id: 'pt-2344',
    category: 'phuong-tien',
    categoryText: 'Thẻ Phương Tiện',
    title: 'Tuyến Vận Tải Lớn 2-3-4-4',
    image: 'assets/The Phuong Tien/2 3 4 4.png',
    effect: 'Tập trung các tàu tải trọng lớn hoạt động trên các tuyến hàng hải bận rộn, tối ưu hóa cước phí vận hành trên mỗi container.',
    strategy: 'Sử dụng khi bạn đã chuẩn bị sẵn lượng container lớn trong kho để nhanh chóng xếp đầy tàu.'
  },
  {
    id: 'pt-3334',
    category: 'phuong-tien',
    categoryText: 'Thẻ Phương Tiện',
    title: 'Hải Trình Liên Tỉnh 3-3-3-4',
    image: 'assets/The Phuong Tien/3 3 3 4.png',
    effect: 'Đội tàu vận tải quy mô lớn liên kết các cảng cửa ngõ. Đảm bảo khả năng giải phóng container nhanh chóng cho các doanh nghiệp xuất nhập khẩu.',
    strategy: 'Tạo áp lực điều tàu lớn, thích hợp khi bạn muốn khóa cảng nhanh bằng các tàu đầy.'
  },
  {
    id: 'pt-3344',
    category: 'phuong-tien',
    categoryText: 'Thẻ Phương Tiện',
    title: 'Siêu Tuyến Vận Tải 3-3-4-4',
    image: 'assets/The Phuong Tien/3 3 4 4.png',
    effect: 'Kết hợp hai siêu tàu viễn dương và hai tàu trung chuyển cỡ trung. Đây là chuỗi liên kết logistics có dung lượng lớn nhất ván chơi.',
    strategy: 'Cơ hội vàng để giao hàng loạt container cùng lúc, thích hợp khi cạnh tranh vị trí số lượng lớn ở cảng FOB hoặc CPT.'
  },

  // ==========================================
  // THẺ SỰ KIỆN (24 CARDS)
  // ==========================================
  // Nhóm 1 - Nội địa xuất
  {
    id: 'sk-dinh-cong-xe',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Đình Công Xe Tải',
    image: 'assets/The Su Kien/ĐÌNH CÔNG.png',
    effect: 'Đình công xe tải đầu kéo chặng xuất phát. Phạt các container đang bốc dỡ tại các cảng: CPT -2đ, DPU -2đ, DDP -2đ. Tất cả các cảng khác (FCA, FAS, FOB, CFR, CIF, CIP, DAP) bị trừ 1đ.',
    strategy: 'Gây tổn thất điểm nhẹ trên diện rộng chặng xuất phát, đặc biệt tổn hại nhóm CPT và cảng Nhóm D.'
  },
  {
    id: 'sk-chay-kho-xuat',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Kho Xuất Bị Cháy',
    image: 'assets/The Su Kien/CHÁY KHO XUẤT.png',
    effect: 'Hỏa hoạn kho hàng xuất khẩu chặng xuất phát. Phạt các container tại các cảng: DPU -3đ, DDP -3đ; cảng CIP chỉ bị trừ 1đ; tất cả các cảng còn lại (FCA, FAS, FOB, CFR, CIF, CPT, DAP) bị trừ 2đ.',
    strategy: 'Thiệt hại nặng nề, nhất là ở DPU và DDP. Cảng CIP ít bị ảnh hưởng nhất nhờ điều khoản bảo hiểm bắt buộc.'
  },
  {
    id: 'sk-tac-duong-noi-dia',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Tắc Đường Nội Địa',
    image: 'assets/The Su Kien/TẮC ĐƯỜNG NỘI ĐỊA.png',
    effect: 'Ùn tắc giao thông nghiêm trọng tại tuyến quốc lộ hướng cảng xuất. Phạt container tại các cảng: FCA -1đ, CPT -1đ, DAP -1đ, DPU -1đ, DDP -1đ. Cảng CIP không bị trừ (0đ). Các cảng khác không bị ảnh hưởng.',
    strategy: 'Làm giảm điểm nhẹ ở một số cảng xuất và cảng đích. CIP an toàn tuyệt đối trước biến cố này.'
  },
  {
    id: 'sk-thieu-thung',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Thiếu Container Rỗng',
    image: 'assets/The Su Kien/THIẾU THÙNG.png',
    effect: 'Khan hiếm container rỗng toàn cầu chặng xuất phát. Phạt các container tại cảng: DPU -2đ. Tất cả các cảng còn lại đều bị trừ 1đ.',
    strategy: 'Thiệt hại điểm số đồng đều tại tất cả cảng, làm chậm bước tiến của toàn bộ bàn chơi.'
  },
  {
    id: 'sk-giao-suon-se',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Giao Hàng Suôn Sẻ',
    image: 'assets/The Su Kien/GIAO HÀNG SUÔN SẺ.png',
    effect: 'Mọi hoạt động diễn ra vô cùng thuận lợi chặng xuất phát. Cộng ngay 1 điểm cho tất cả container đang hiện diện tại mọi cảng.',
    strategy: 'Cơ hội vàng để gia tăng điểm uy tín đồng loạt cho tất cả các container của bạn.'
  },
  // Nhóm 2 - Cảng xuất
  {
    id: 'sk-cang-xuat-ket',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Cảng Xuất Kẹt',
    image: 'assets/The Su Kien/KẸT CẢNG.png',
    effect: 'Ùn tắc bãi container tại cảng xuất bốc hàng. Phạt các container tại cảng: FOB -2đ, DPU -2đ, DDP -2đ; các cảng FAS, CFR, CIF, DAP bị trừ 1đ. Các cảng khác không ảnh hưởng.',
    strategy: 'Đánh mạnh vào FOB và nhóm D rủi ro cao tại nước đích. Hãy phân bổ sang các cảng khác để né tránh.'
  },
  {
    id: 'sk-cau-hong',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Cẩu Cẩu Hỏng',
    image: 'assets/The Su Kien/CẨU CẨU HỎNG.png',
    effect: 'Hệ thống cẩu trục chuyên dụng bốc dỡ tại cảng xuất gặp sự cố kỹ thuật. Phạt các container tại cảng: FAS -2đ, FOB -2đ, CFR -2đ, DAP -2đ, DPU -3đ, DDP -2đ; cảng CIF chỉ bị trừ 1đ. Các cảng khác không ảnh hưởng.',
    strategy: 'Làm gián đoạn tiến độ và trừ điểm nặng, hãy chú ý bảo vệ container của bạn bằng các cảng có bảo hiểm như CIF.'
  },
  {
    id: 'sk-kiem-dich-hang-hoa',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Kiểm Dịch Hàng Hóa',
    image: 'assets/The Su Kien/KIỂM DỊCH HÀNG HÓA.png',
    effect: 'Cơ quan kiểm dịch yêu cầu lấy mẫu kiểm tra sinh hóa kéo dài thời gian thông quan tại cảng xuất. Phạt các container tại cảng: FAS -1đ, FOB -1đ, CFR -1đ, CIF -1đ, DAP -1đ, DPU -1đ, DDP -1đ. Các cảng khác không ảnh hưởng.',
    strategy: 'Gây sụt giảm điểm nhẹ tại hầu hết các cảng ngoại trừ FCA và CPT.'
  },
  {
    id: 'sk-mat-van-don',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Mất Vận Đơn',
    image: 'assets/The Su Kien/MẤT VẬN ĐƠN.png',
    effect: 'Thất lạc chứng từ vận đơn gốc (Bill of Lading) tại cảng xuất. Phạt các container tại cảng: FOB -2đ, CFR -2đ, DAP -2đ, DPU -2đ, DDP -2đ; các cảng FAS và CIF bị trừ 1đ. Các cảng khác không ảnh hưởng.',
    strategy: 'Gây thiệt hại điểm lớn khi giao hàng không chứng từ, các điều khoản bảo hiểm như CIF giảm bớt thiệt hại.'
  },
  // Nhóm 3 - Trên biển
  {
    id: 'sk-bao',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Bão Nhiệt Đới',
    image: 'assets/The Su Kien/BÃO NHIỆT ĐỚI.png',
    effect: 'Bão lớn trên biển làm đình trệ hải trình. Phạt các container tại cảng: DAP -2đ, DPU -3đ, DDP -2đ. Container tại CIF và CIP nhận thêm +1 điểm bonus (nhờ có bảo hiểm). Các cảng khác không bị ảnh hưởng.',
    strategy: 'Trừ điểm cực nặng nhóm D chịu rủi ro trên biển. Cộng điểm thưởng cho nhóm có bảo hiểm CIF/CIP.'
  },
  {
    id: 'sk-cuop-bien',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Cướp Biển',
    image: 'assets/The Su Kien/CƯỚP BIỂN.png',
    effect: 'Tàu chở container đi qua vùng biển có cướp biển lộng hành. Phạt các container tại cảng: DAP -2đ, DPU -3đ, DDP -2đ. Container tại CIF và CIP được cộng +1 điểm bonus nhờ được bảo hiểm đền bù.',
    strategy: 'Nhắm vào các đối thủ đang tập trung hàng ở cảng Nhóm D mà không có bảo hiểm bảo vệ.'
  },
  {
    id: 'sk-tau-hong-may',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Tàu Hỏng Máy',
    image: 'assets/The Su Kien/TÀU HỎNG MÁY.png',
    effect: 'Trục trặc kỹ thuật động cơ của tàu biển chặng chính. Phạt các container tại cảng: DAP -1đ, DPU -2đ, DDP -1đ. Container tại CIF và CIP được cộng +1 điểm bonus. Các cảng khác không bị ảnh hưởng.',
    strategy: 'Mức phạt nhẹ hơn bão biển nhưng vẫn gây bất lợi lớn cho nhóm cảng đích D.'
  },
  {
    id: 'sk-kenh-dao-tac',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Kênh Đào Tắc',
    image: 'assets/The Su Kien/KÊNH ĐÀO TẮC.png',
    effect: 'Sự cố kẹt tàu tại kênh đào huyết mạch quốc tế. Phạt các container tại cảng: CFR -1đ, DAP -2đ, DPU -3đ, DDP -2đ. Container tại CIF và CIP được cộng +1 điểm bonus. Các cảng khác không ảnh hưởng.',
    strategy: 'Cước biển tăng và kẹt tàu, hãy lợi dụng CIF/CIP để lật ngược thế cờ khi kênh đào bị kẹt.'
  },
  {
    id: 'sk-song-than',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Sóng Thần',
    image: 'assets/The Su Kien/SÓNG THẦN.png',
    effect: 'Thảm họa sóng thần cực đoan trên biển. Phạt các container tại cảng: DAP -3đ, DPU -4đ, DDP -3đ. Container tại CIF và CIP được cộng +1 điểm bonus. Các cảng khác không ảnh hưởng.',
    strategy: 'Quân bài hủy diệt điểm số nhóm D lớn nhất ván game. Hãy đảm bảo container của bạn được bảo hiểm.'
  },
  // Nhóm 4 - Cảng nhập
  {
    id: 'sk-hai-quan-giu',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Hải Quan Giữ Hàng',
    image: 'assets/The Su Kien/HẢI QUAN GIỮ HÀNG.png',
    effect: 'Kiểm hóa hải quan nước nhập khẩu phát hiện sai sót giấy tờ. Phạt container tại các cảng: DAP -2đ, DPU -2đ, DDP -1đ. Các cảng khác không bị ảnh hưởng.',
    strategy: 'Thông quan lỗi gây thiệt hại cho nhóm D. Cảng DDP chịu phạt nhẹ hơn vì người bán lo trọn gói thủ tục hải quan.'
  },
  {
    id: 'sk-cang-nhap-qua-tai',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Cảng Nhập Quá Tải',
    image: 'assets/The Su Kien/CẢNG NHẬP QUÁ TẢI.png',
    effect: 'Quá tải hạ tầng cầu cảng nước nhập khẩu làm chậm tiến độ làm hàng. Phạt container tại các cảng: CFR -1đ, CIF -1đ, DAP -1đ, DPU -2đ, DDP -1đ. Các cảng khác không ảnh hưởng.',
    strategy: 'Giảm hiệu suất giải phóng tàu, ảnh hưởng nhẹ đến hầu hết cảng đích.'
  },
  {
    id: 'sk-mat-chung-tu-nhap',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Mất Chứng Từ Nhập',
    image: 'assets/The Su Kien/MẤT CHỨNG TỪ NHẬP.png',
    effect: 'Thất lạc bộ chứng từ khai hải quan nhập khẩu. Phạt container tại các cảng: DAP -2đ, DPU -2đ, DDP -1đ. Các cảng khác không ảnh hưởng.',
    strategy: 'Khó khăn trong khâu nhận hàng chặng cuối, đánh trực tiếp vào nhóm D.'
  },
  {
    id: 'sk-dinh-cong-boc',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Đình Công Bốc Dỡ',
    image: 'assets/The Su Kien/ĐÌNH CÔNG BỐC DỠ.png',
    effect: 'Đình công của công nhân xếp dỡ tại cảng nước nhập khẩu. Phạt container tại các cảng: DAP -1đ, DPU -3đ, DDP -2đ. Các cảng khác không ảnh hưởng.',
    strategy: 'Đánh trực tiếp vào khâu dỡ hàng. Cảng DPU bị phạt nặng nhất vì bắt buộc người bán phải dỡ container xuống bãi.'
  },
  {
    id: 'sk-thieu-thiet-bi',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Thiếu Thiết Bị Dỡ Hàng',
    image: 'assets/The Su Kien/THIẾU THIẾT BỊ DỠ HÀNG.png',
    effect: 'Cảng nước nhập khẩu thiếu phương tiện/xe nâng bốc dỡ container chuyên dụng. Phạt container tại các cảng: DPU -2đ, DDP -1đ. Các cảng khác không ảnh hưởng.',
    strategy: 'Đánh vào các điều khoản yêu cầu giao sâu tại bãi cảng nước đích.'
  },
  // Nhóm 5 - Nội địa nhập
  {
    id: 'sk-dia-chi-sai',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Địa Chỉ Giao Sai',
    image: 'assets/The Su Kien/ĐỊA CHỈ GIAO SAI.png',
    effect: 'Nhầm lẫn thông tin địa chỉ kho nhận hàng chặng cuối. Phạt container tại các cảng: DAP -1đ, DPU -2đ, DDP -2đ. Các cảng khác không bị ảnh hưởng.',
    strategy: 'Sai lầm trong phân phối nội địa nước đích, ảnh hưởng xấu đến các cảng giao tận nơi.'
  },
  {
    id: 'sk-bi-tu-choi',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Hàng Bị Từ Chối',
    image: 'assets/The Su Kien/HÀNG BỊ TỪ CHỐI.png',
    effect: 'Hàng hóa không đạt chuẩn chất lượng kiểm tra của người mua và bị trả lại. Phạt container tại các cảng: DAP -2đ, DPU -3đ, DDP -1đ. Các cảng khác không ảnh hưởng.',
    strategy: 'Tổn thất lớn về chi phí hoàn trả hàng, phạt rất nặng nhóm DAP/DPU.'
  },
  {
    id: 'sk-thue-bat-ngo',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Thuế Bất Ngờ',
    image: 'assets/The Su Kien/THUẾ BẤT NGỜ.png',
    effect: 'Tăng thuế nhập khẩu bất ngờ từ chính phủ nước đích. Phạt container tại các cảng: DAP -2đ, DPU -2đ. Cảng DDP không bị ảnh hưởng (0đ). Các cảng khác không ảnh hưởng.',
    strategy: 'DDP thể hiện lợi thế tuyệt đối vì giá bán đã bao gồm thuế, trong khi DAP/DPU bị phạt nặng vì chưa đóng thuế.'
  },
  {
    id: 'sk-kho-day',
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    title: 'Kho Người Nhận Đầy',
    image: 'assets/The Su Kien/Kho Người Nhận Đầy.png',
    effect: 'Nhận được thông báo rằng kho đang đầy và không thể nhận thêm container.',
    strategy: 'Cân nhắc giảm khối lượng shipments hoặc mở rộng kho.'
  },
];

const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
const cardsGrid = document.getElementById('cardsGrid');
const cardSearch = document.getElementById('cardSearch');
const tabButtons = document.querySelectorAll('.tab-btn, .tactical-tab-btn, .game-btn-tab, .sx-tab-btn');

// Modal Elements
const cardModal = document.getElementById('cardModal');
const modalClose = document.getElementById('modalClose');
const modalCardImg = document.getElementById('modalCardImg');
const modalCardType = document.getElementById('modalCardType');
const modalCardTitle = document.getElementById('modalCardTitle');
const modalCardEffect = document.getElementById('modalCardEffect');
const modalCardStrategy = document.getElementById('modalCardStrategy');

// APPLICATION STATE
let activeCategory = 'all';
let searchQuery = '';

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  initEvents();
  initGSAPAnimations();
});

// EVENT LISTENERS INITIALIZATION
function initEvents() {
  // Mobile navigation toggle
  mobileToggle.addEventListener('click', () => {
    if (mobileNav.classList.contains('active')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  // ── NAV DELIVERY BUTTON HANDLER (Header / Sidebar) ──
  const navDeliveryBtns = document.querySelectorAll('.nav-delivery-btn, [data-nav-delivery-btn], #headerDeliveryBtn, #sidebarDeliveryBtn');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  navDeliveryBtns.forEach(btn => {
    btn.removeAttribute('onclick');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      if (
        btn.classList.contains('is-adding') ||
        btn.classList.contains('is-animating') ||
        btn.classList.contains('is-complete')
      ) return;

      btn.setAttribute('aria-disabled', 'true');

      // Reduced motion: navigate ngay
      if (reduceMotion.matches) {
        btn.classList.add('is-complete');
        window.location.href = 'buy.html';
        return;
      }

      // Phase 1: Thêm vào giỏ hàng (2.45s)
      btn.classList.add('is-adding');

      // Phase 2: Bắt đầu giao hàng xe tải chạy qua (5.3s)
      setTimeout(() => {
        btn.classList.remove('is-adding');
        btn.classList.add('is-animating');

        // Khi xe tải vừa chạy hết đoạn đường (~5.3s), lập tức chuyển hướng sang buy.html (cắt bỏ toàn bộ hoạt cảnh thành công phía sau)
        setTimeout(() => {
          btn.classList.add('is-complete');
          window.location.href = 'buy.html';
        }, 5300);

        // Reset an toàn
        setTimeout(() => {
          btn.classList.remove('is-adding', 'is-animating', 'is-complete');
          btn.removeAttribute('aria-disabled');
        }, 6500);
      }, 2450);
    });
  });

  // CRITICAL REQUIREMENT: Strictly lock page scroll when sidebar is open or closing
  let isClosingNav = false;

  function closeSidebarFirst(e) {
    if (mobileNav.classList.contains('active') || isClosingNav) {
      if (e && e.cancelable) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (!isClosingNav) {
        isClosingNav = true;
        closeMobileNav(() => {
          isClosingNav = false;
        });
      }
      return true;
    }
    return false;
  }

  // Intercept Wheel & Touch events to force Sidebar exit BEFORE any page scroll
  window.addEventListener('wheel', (e) => {
    // If sidebar is active, ANY scroll wheel action (especially UP) closes sidebar first and prevents page scroll
    if (mobileNav.classList.contains('active') || isClosingNav) {
      closeSidebarFirst(e);
    }
  }, { passive: false });

  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (mobileNav.classList.contains('active') || isClosingNav) {
      closeSidebarFirst(e);
    }
  }, { passive: false });

  // Handle Virtual View Transitions
  const navElements = document.querySelectorAll('[data-nav]');
  navElements.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = el.getAttribute('data-nav');

      const executeNav = () => {
        if (targetView === 'buy') {
          switchView('home');
          history.pushState(null, '', '#buy');
          setTimeout(() => {
            const buySection = document.getElementById('buy');
            if (buySection) {
              buySection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          switchView(targetView);
          history.pushState(null, '', '#' + targetView);

          // Kéo về đầu trang của trang vừa bấm
          if (typeof lenis !== 'undefined' && lenis) {
            lenis.scrollTo(0, { immediate: true });
          }
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      };

      // Nếu đang mở sidebar (mobile nav), đóng sidebar trước rồi chuyển trang và cuộn về đầu trang 0
      if (mobileNav && mobileNav.classList.contains('active')) {
        closeMobileNav(() => {
          savedScrollY = 0;
          executeNav();
        });
      } else {
        executeNav();
      }
    });
  });

  // Handle URL Hash Routing on page load and hashchange
  function handleHashRouting() {
    const rawHash = window.location.hash.replace('#', '').trim();
    if (!rawHash) return;

    if (rawHash === 'about' || rawHash === 'team' || rawHash === 'gameplay' || rawHash === 'cards' || rawHash === 'home') {
      switchView(rawHash);
    } else if (rawHash === 'buy') {
      switchView('home');
      setTimeout(() => {
        const buySection = document.getElementById('buy');
        if (buySection) {
          buySection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  }

  window.addEventListener('hashchange', handleHashRouting);
  setTimeout(handleHashRouting, 50);

  // Tab Filtering (Cards page)
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-tab');
      renderCards();
    });
  });

  // Gameplay Page Tab Navigation (.gp-tab) with Smooth Scroll & GSAP spring highlight
  document.querySelectorAll('.gp-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.gp-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetTab = tab.getAttribute('data-gptab');
      if (targetTab === 'overview') {
        const stats = document.querySelector('.gp-stats-bar');
        if (stats) {
          stats.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else if (targetTab === 'guide') {
        const sec = document.getElementById('gpActions');
        if (sec) {
          sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (targetTab === 'components') {
        const sec = document.getElementById('gpFlow');
        if (sec) {
          sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (targetTab === 'glossary') {
        const sec = document.getElementById('gpIncoterms');
        if (sec) {
          sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Search input filtering
  cardSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderCards();
  });

  // Global Keyboard Shortcut: '/' to focus Card Search Input
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== cardSearch && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      const cardsView = document.getElementById('cardsView');
      if (cardsView && cardsView.classList.contains('active')) {
        e.preventDefault();
        cardSearch.focus();
        cardSearch.select();
      }
    }
  });

  // Smooth Auto-hide / Reveal Header on Scroll
  let lastScrollTop = 0;
  const headerEl = document.getElementById('header');

  window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Always show header at the very top of the page
    if (currentScrollTop <= 20) {
      headerEl.classList.remove('header-hidden');
    }
    // Scrolling DOWN (past 80px): hide header smoothly
    else if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
      headerEl.classList.add('header-hidden');
    }
    // Scrolling UP: reveal header smoothly
    else if (currentScrollTop < lastScrollTop) {
      headerEl.classList.remove('header-hidden');
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }, { passive: true });

  // Modal interactions
  modalClose.addEventListener('click', closeCardModal);
  cardModal.addEventListener('click', (e) => {
    if (e.target === cardModal) closeCardModal();
  });

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cardModal.classList.contains('active')) {
      closeCardModal();
    }
  });

  // ── DELIVERY BUTTON HANDLER (Phase 1 + Phase 2) ──
  // All .order-button elements (both header and sidebar) get the full animation sequence
  const CART_ANIM_DURATION = 2450;   // ms — Phase 1 shirt→cart
  const DELIVERY_DURATION = 8000;   // ms — Phase 2 truck
  const reduceMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  const deliveryTimerMap = new WeakMap();

  function resetDeliveryBtn(btn) {
    const timers = deliveryTimerMap.get(btn) || [];
    timers.forEach(clearTimeout);
    deliveryTimerMap.delete(btn);
    btn.classList.remove('is-adding', 'is-animating', 'is-complete');
    btn.removeAttribute('aria-disabled');
    btn.setAttribute('aria-label', 'Mua ngay');
  }

  function deliveryPhase2(btn) {
    btn.classList.remove('is-adding');
    btn.classList.add('is-animating');

    // Sau khi xe tải chạy qua hoàn tất (5.3s): Cắt bỏ hoạt cảnh "Đặt hàng thành công", ngay lập tức chuyển sang trang mua hàng
    const t = setTimeout(() => {
      btn.classList.add('is-complete');
      window.location.href = 'buy.html';
    }, 5300);

    deliveryTimerMap.set(btn, [t]);
  }

  function deliveryPhase1(btn) {
    if (btn.classList.contains('is-adding') ||
      btn.classList.contains('is-animating') ||
      btn.classList.contains('is-complete')) return;

    btn.setAttribute('aria-disabled', 'true');

    // Reduced motion: skip animations, redirect immediately
    if (reduceMotionMQ.matches) {
      btn.classList.add('is-complete');
      const t = setTimeout(() => { window.location.href = 'buy.html'; }, 600);
      deliveryTimerMap.set(btn, [t]);
      return;
    }

    btn.classList.add('is-adding');
    const t = setTimeout(() => deliveryPhase2(btn), CART_ANIM_DURATION);
    deliveryTimerMap.set(btn, [t]);
  }

  // Wire all .order-button elements on this page
  document.querySelectorAll('.order-button').forEach(btn => {
    // Remove inline onclick to avoid double firing — replace with JS
    btn.removeAttribute('onclick');
    btn.addEventListener('click', () => deliveryPhase1(btn));
  });

  reduceMotionMQ.addEventListener('change', () => {
    document.querySelectorAll('.order-button').forEach(btn => resetDeliveryBtn(btn));
  });
}


// SMOOTH OPEN / CLOSE MOBILE NAV WITH GSAP
let savedScrollY = 0;

function openMobileNav() {
  if (mobileNav.classList.contains('active')) return;

  savedScrollY = window.pageYOffset || document.documentElement.scrollTop;
  mobileToggle.classList.add('active');
  mobileNav.classList.add('active');

  // Strictly pin the page in place using fixed positioning
  document.body.style.position = 'fixed';
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';

  if (typeof gsap !== 'undefined') {
    gsap.killTweensOf(mobileNav);
    gsap.killTweensOf('.mobile-link');

    gsap.fromTo(mobileNav,
      { xPercent: -100, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 0.45, ease: 'power3.out' }
    );
    gsap.fromTo('.mobile-link',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
    );
  }
}

function closeMobileNav(onCompleteCallback) {
  mobileToggle.classList.remove('active');

  const restoreBodyScroll = () => {
    mobileNav.classList.remove('active');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';

    if (onCompleteCallback) {
      onCompleteCallback();
    } else {
      window.scrollTo(0, savedScrollY);
    }
  };

  if (typeof gsap !== 'undefined') {
    gsap.killTweensOf(mobileNav);
    gsap.to(mobileNav, {
      xPercent: -100,
      opacity: 0,
      duration: 0.35,
      ease: 'power3.inOut',
      onComplete: restoreBodyScroll
    });
  } else {
    restoreBodyScroll();
  }
}

// GLOBAL LENIS SMOOTH SCROLL INSTANCE
let lenis = null;

function initSmoothScroll() {
  if (typeof Lenis === 'undefined') return;

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.05,
    touchMultiplier: 1.2,
    infinite: false,
  });

  // Sync Lenis with GSAP ScrollTrigger
  if (typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

// GSAP 3D & SCROLLANIMATIONS ENGINE (OPTIMIZED & ULTRA SMOOTH)
function initGSAPAnimations() {
  initSmoothScroll();

  if (typeof gsap === 'undefined') return;

  // Register ScrollTrigger & ScrollToPlugin if available
  if (typeof ScrollTrigger !== 'undefined') {
    if (typeof ScrollToPlugin !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    } else {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  // ── 1. HERO TITLE ENTRANCE ──
  gsap.from('.home-banner-title', {
    y: 50,
    opacity: 0,
    duration: 1.6,
    ease: 'power3.out',
    delay: 0.3
  });

  gsap.from('.home-banner-sub', {
    y: 35,
    opacity: 0,
    duration: 1.4,
    ease: 'power3.out',
    delay: 0.6
  });

  // Hero Background Image is kept completely static with no parallax movement

  // ── 2. HERO SCROLL CURTAIN & PRODUCT ZOOM REVEAL ──
  const heroSection = document.getElementById('hero');
  const heroCurtain = document.getElementById('heroCurtain');
  const heroProductReveal = document.getElementById('heroProductReveal');
  const heroProductCaption = document.getElementById('heroProductCaption');
  const firstContentSec = document.getElementById('block1-showcase');

  if (heroSection && heroCurtain && typeof ScrollTrigger !== 'undefined') {
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 1.0,
        anticipatePin: 1
      }
    });

    // Stage 1: Kéo dãn thanh chữ nhật thẻ bài theo chiều dọc
    heroTl.to(heroCurtain, {
      height: '100%',
      duration: 1,
      ease: 'power1.inOut'
    });

    // Stage 2: Mở rộng thanh thẻ bài sang 2 bên màn hình
    heroTl.to(heroCurtain, {
      width: '100%',
      duration: 1.2,
      ease: 'power1.inOut'
    });

    // Stage 3: Phóng to bộ sản phẩm từ từ, liên tục
    if (heroProductReveal) {
      heroTl.fromTo(heroProductReveal,
        { opacity: 0, scale: 0.15 },
        { opacity: 1, scale: 1, duration: 1.8, ease: 'power1.out' }
      );
    }

    // Stage 3.5: Xuất hiện dòng chữ "Nhập cuộc ngay hôm nay"
    if (heroProductCaption) {
      heroTl.fromTo(heroProductCaption,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power1.out' },
        '-=1.0'
      );
    }

    // Stage 4: Trượt chuyển cảnh mượt mà dẫn vào trước Khối 1
    if (firstContentSec) {
      heroTl.from(firstContentSec, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power1.out'
      });
    }

    // Click on Hero to smoothly auto-scroll into Block 1
    let isAutoScrolling = false;
    heroSection.style.cursor = 'pointer';

    heroSection.addEventListener('click', (e) => {
      if (e.button !== 0 || isAutoScrolling) return;
      if (e.target.closest('a, button')) return;

      const st = heroTl.scrollTrigger;
      if (!st || st.progress >= 0.95) return;

      isAutoScrolling = true;
      gsap.to(window, {
        scrollTo: st.end,
        duration: 3.5,
        ease: 'power1.inOut',
        onComplete: () => { isAutoScrolling = false; }
      });
    });
  }

  // ── 3. KHỐI 1 (GIỚI THIỆU NHANH LOGISQUEST - #block1-showcase) ──
  if (typeof ScrollTrigger !== 'undefined') {
    // Header tier (Logo, Headline, Subheadline)
    gsap.from(['.showcase-brand-logo', '.showcase-main-headline', '.showcase-sub-headline'], {
      scrollTrigger: {
        trigger: '#block1-showcase',
        start: 'top 78%'
      },
      y: 35,
      opacity: 0,
      stagger: 0.12,
      duration: 0.85,
      ease: 'power2.out'
    });

    // Airplane glide & contrail animation
    gsap.fromTo('.showcase-plane-deco',
      { x: -50, y: 25, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '#block1-showcase',
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1.2
        },
        x: 0,
        y: 0,
        opacity: 1,
        ease: 'power1.out'
      }
    );

    // Left 50% Glass Card Carousel
    gsap.from('.showcase-glass-card', {
      scrollTrigger: {
        trigger: '#block1-showcase',
        start: 'top 65%'
      },
      y: 45,
      scale: 0.95,
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out'
    });

    // Right 50% Text & CTA
    gsap.from(['.showcase-text-wrap', '.showcase-cta-wrap'], {
      scrollTrigger: {
        trigger: '#block1-showcase',
        start: 'top 65%'
      },
      x: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.9,
      ease: 'power2.out'
    });
  }

  // ── 4. KHỐI 2 (LỐI CHƠI ĐẤU TRÍ - #block2-gameplay) ──
  if (typeof ScrollTrigger !== 'undefined') {
    // Right Boardgame Cutout Showcase
    gsap.from('#block2-gameplay .quychien-boardgame-showcase', {
      scrollTrigger: {
        trigger: '#block2-gameplay',
        start: 'top 75%'
      },
      scale: 0.92,
      opacity: 0,
      duration: 1.1,
      ease: 'power2.out'
    });

    // Left Column Nautical Ribbon Badge, Headline & Amber Divider
    gsap.from(['#block2-gameplay .nautical-ribbon-badge', '#block2-gameplay .quychien-gameplay-headline', '#block2-gameplay .quychien-headline-divider-amber'], {
      scrollTrigger: {
        trigger: '#block2-gameplay',
        start: 'top 75%'
      },
      x: -35,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Paragraphs Reveal
    gsap.from('#block2-gameplay .gameplay-p', {
      scrollTrigger: {
        trigger: '#block2-gameplay .quychien-gameplay-paragraphs',
        start: 'top 80%'
      },
      y: 25,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out'
    });
  }

  // ── 5. KHỐI 3 (QUY MÔ CHIẾN TRƯỜNG 2-5 NGƯỜI - #block3-scale) ──
  if (typeof ScrollTrigger !== 'undefined') {
    // Left Photo Showcase
    gsap.from('#block3-scale .quychien-photo-showcase', {
      scrollTrigger: {
        trigger: '#block3-scale',
        start: 'top 75%'
      },
      scale: 0.92,
      opacity: 0,
      duration: 1.1,
      ease: 'power2.out'
    });

    // Right Column Nautical Ribbon Badge, Headline & Amber Divider
    gsap.from(['#block3-scale .nautical-ribbon-badge', '#block3-scale .quychien-gameplay-headline', '#block3-scale .quychien-headline-divider-amber'], {
      scrollTrigger: {
        trigger: '#block3-scale',
        start: 'top 75%'
      },
      x: 35,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Paragraphs Reveal
    gsap.from('#block3-scale .gameplay-p', {
      scrollTrigger: {
        trigger: '#block3-scale .quychien-gameplay-paragraphs',
        start: 'top 80%'
      },
      y: 25,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out'
    });
  }

  // ── 6. KHỐI 4 (4 TRỤ CỘT CHIẾN THUẬT - #block4-pillars) ──
  if (typeof ScrollTrigger !== 'undefined') {
    // Background Diorama Parallax
    gsap.to('.pillars-diorama-img', {
      scrollTrigger: {
        trigger: '#block4-pillars',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2
      },
      yPercent: -12,
      ease: 'none'
    });

    // Headline
    gsap.from('#block4-pillars .pillars-headline-modern', {
      scrollTrigger: {
        trigger: '#block4-pillars',
        start: 'top 78%'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Fan Deck Cards Staggered Opening Spread
    gsap.from('.pillar-fandeck-card', {
      scrollTrigger: {
        trigger: '#pillarsFanDeck',
        start: 'top 75%'
      },
      y: 60,
      scale: 0.8,
      opacity: 0,
      stagger: 0.1,
      duration: 0.9,
      ease: 'back.out(1.3)'
    });

    // 3D Decor Icons Parallax Response on Scroll
    gsap.to('.decor-crane-bottom-left', {
      scrollTrigger: { trigger: '#block4-pillars', start: 'top bottom', end: 'bottom top', scrub: 1 },
      y: -35,
      ease: 'none'
    });
    gsap.to('.decor-cont-bottom-right', {
      scrollTrigger: { trigger: '#block4-pillars', start: 'top bottom', end: 'bottom top', scrub: 1 },
      y: -50,
      ease: 'none'
    });
    gsap.to('.decor-boat-bottom-center', {
      scrollTrigger: { trigger: '#block4-pillars', start: 'top bottom', end: 'bottom top', scrub: 1 },
      y: -25,
      ease: 'none'
    });

    // Pill Selector Row Buttons
    gsap.from('.pillars-selector-row .pillar-select-btn', {
      scrollTrigger: {
        trigger: '.pillars-selector-row',
        start: 'top 88%'
      },
      y: 25,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: 'power2.out'
    });
  }

  // ── 7. KHỐI 5 (VIDEO HƯỚNG DẪN CÁCH CHƠI - #block5-guide) ──
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.from('#block5-guide .nautical-boardgame-badge, #block5-guide .guide-nautical-headline', {
      scrollTrigger: {
        trigger: '#block5-guide',
        start: 'top 80%'
      },
      y: 25,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });

    gsap.from('.video-frame', {
      scrollTrigger: {
        trigger: '#block5-guide',
        start: 'top 75%'
      },
      scale: 0.96,
      y: 30,
      opacity: 0,
      duration: 0.85,
      stagger: 0.12,
      ease: 'power2.out'
    });
  }

  // ── 8. CTA MUA HÀNG & FOOTER LEAD-IN (#buy) ──
  if (typeof ScrollTrigger !== 'undefined') {
    // Background Image is kept static (no parallax) to prevent clipping & displacement artifacts

    // Content Left Stack
    gsap.from(['.home-cta-badge', '.home-cta-title-wrap', '.home-cta-description', '.home-cta-action-btns'], {
      scrollTrigger: {
        trigger: '#buy',
        start: 'top 75%'
      },
      y: 35,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power2.out'
    });

    // 3 Feature items bar
    gsap.from('.cta-feature-item', {
      scrollTrigger: {
        trigger: '.home-cta-features-bar',
        start: 'top 85%'
      },
      y: 25,
      opacity: 0,
      stagger: 0.1,
      duration: 0.65,
      ease: 'back.out(1.4)'
    });
  }

  // ── 9. CARDS VIEW ANIMATIONS ──
  initCardsAnimations();

  // ── 10. GAMEPLAY VIEW ANIMATIONS ──
  initGameplayAnimations();

  // ── 11. INTRO SLIDESHOW INITIALIZATION ──
  initIntroSlideshow();
}

// CARDS VIEW (BỘ SƯU TẬP THẺ BÀI) GSAP SCROLL & REVEAL ANIMATIONS
function initCardsAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // 1. StyleX Header & Lead Cascade
  gsap.from(['.sx-status-chip', '.sx-cards-title', '.sx-title-divider', '.sx-cards-lead'], {
    scrollTrigger: {
      trigger: '#cardsView',
      start: 'top 85%'
    },
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power2.out'
  });

  // 2. Command Dock (Search & Filter Tabs)
  gsap.from('.sx-command-dock', {
    scrollTrigger: {
      trigger: '#cardsView',
      start: 'top 80%'
    },
    y: 35,
    opacity: 0,
    duration: 0.85,
    ease: 'power2.out',
    delay: 0.15
  });
}

// GAMEPLAY VIEW (CÁCH CHƠI) GSAP SCROLL & REVEAL ANIMATIONS
function initGameplayAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // 1. Hero Header & Tabs
  gsap.from(['.gp-hero-title', '.gp-hero-divider', '.gp-hero-sub'], {
    scrollTrigger: {
      trigger: '#gameplay',
      start: 'top 85%'
    },
    y: 35,
    opacity: 0,
    stagger: 0.12,
    duration: 0.85,
    ease: 'power2.out'
  });

  gsap.from('.gp-tab', {
    scrollTrigger: {
      trigger: '.gp-tabs',
      start: 'top 88%'
    },
    y: 20,
    opacity: 0,
    stagger: 0.08,
    duration: 0.6,
    ease: 'back.out(1.5)'
  });

  // 2. Quick Stats Bar (2-4 Players, 45-60 min, 12+, Goal)
  gsap.from('.gp-stat', {
    scrollTrigger: {
      trigger: '.gp-stats-bar',
      start: 'top 85%'
    },
    y: 30,
    scale: 0.92,
    opacity: 0,
    stagger: 0.1,
    duration: 0.7,
    ease: 'back.out(1.5)'
  });

  // 3. Section 1: Ba Hành Động (01 Nạp Container, 02 Xếp Hàng, 03 Điều Tàu)
  gsap.from('.gp-actions-grid .gp-action-card', {
    scrollTrigger: {
      trigger: '.gp-actions-grid',
      start: 'top 80%'
    },
    y: 45,
    opacity: 0,
    stagger: 0.16,
    duration: 0.85,
    ease: 'power2.out'
  });

  // 4. Section 2: Quy Trình Cập Cảng (Flow cards Step 1-4 & Arrows)
  gsap.from('.gp-flow-card', {
    scrollTrigger: {
      trigger: '.gp-flow-grid',
      start: 'top 80%'
    },
    x: -30,
    opacity: 0,
    stagger: 0.14,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('.gp-flow-arrow', {
    scrollTrigger: {
      trigger: '.gp-flow-grid',
      start: 'top 80%'
    },
    scale: 0,
    opacity: 0,
    stagger: 0.14,
    duration: 0.6,
    ease: 'back.out(2.0)',
    delay: 0.15
  });

  // 5. Section 3: Cơ chế tính điểm 11 Cảng Incoterms (Nhóm E, F, C, D)
  gsap.from('.gp-inc-card', {
    scrollTrigger: {
      trigger: '.gp-incoterm-grid',
      start: 'top 80%'
    },
    y: 35,
    opacity: 0,
    stagger: 0.14,
    duration: 0.85,
    ease: 'power2.out'
  });

  // 6. Lưu ý quan trọng Box
  gsap.from('.gp-note', {
    scrollTrigger: {
      trigger: '.gp-note',
      start: 'top 88%'
    },
    y: 25,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out'
  });
}

// INTRO SLIDESHOW ROTATION WITH GSAP 3D ANIMATION (AUTOMATIC 4s + MANUAL DOTS & SWIPE)
function initIntroSlideshow() {
  const container = document.getElementById('introSlideshow');
  const slides = document.querySelectorAll('.intro-slide');
  const dots = document.querySelectorAll('.intro-dot');

  if (!slides || slides.length === 0) return;

  let currentIndex = 0;
  let isAnimating = false;
  let autoTimer = null;

  function showSlide(nextIndex) {
    if (isAnimating) return;
    if (nextIndex < 0) nextIndex = slides.length - 1;
    if (nextIndex >= slides.length) nextIndex = 0;
    if (nextIndex === currentIndex) return;

    isAnimating = true;
    const currentSlide = slides[currentIndex];
    const nextSlide = slides[nextIndex];

    const isNext = nextIndex > currentIndex || (currentIndex === slides.length - 1 && nextIndex === 0);
    const enterRotateY = isNext ? 35 : -35;
    const exitRotateY = isNext ? -35 : 35;

    // Fade transition đơn giản mượt mà (loại bỏ hiệu ứng 3D)
    if (typeof gsap !== 'undefined') {
      gsap.to(currentSlide, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          currentSlide.classList.remove('active');
          gsap.set(currentSlide, { visibility: 'hidden', opacity: 0 });
        }
      });

      gsap.set(nextSlide, {
        visibility: 'visible',
        opacity: 0
      });
      nextSlide.classList.add('active');

      gsap.to(nextSlide, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          currentIndex = nextIndex;
          isAnimating = false;
        }
      });
    } else {
      // Fallback transition
      currentSlide.classList.remove('active');
      nextSlide.classList.add('active');
      currentIndex = nextIndex;
      isAnimating = false;
    }

    // Update dots state
    dots.forEach((dot, idx) => {
      if (idx === nextIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoTimer = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 4000);
  }

  function stopAutoPlay() {
    if (autoTimer) clearInterval(autoTimer);
  }

  // Dots click handlers
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const slideIdx = parseInt(dot.getAttribute('data-slide'), 10);
      showSlide(slideIdx);
      startAutoPlay();
    });
  });

  // Touch & Mouse Swipe / Drag Support for manual swipe
  if (container) {
    let startX = 0;
    let isDragging = false;

    // Touch events for mobile
    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diffX = endX - startX;
      if (Math.abs(diffX) > 40) { // Threshold 40px
        if (diffX < 0) {
          showSlide(currentIndex + 1); // Swipe left -> Next
        } else {
          showSlide(currentIndex - 1); // Swipe right -> Prev
        }
        startAutoPlay();
      }
    }, { passive: true });

    // Mouse drag events for desktop
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
    });

    container.addEventListener('mouseup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.clientX;
      const diffX = endX - startX;
      if (Math.abs(diffX) > 40) {
        if (diffX < 0) {
          showSlide(currentIndex + 1);
        } else {
          showSlide(currentIndex - 1);
        }
        startAutoPlay();
      }
    });

    container.addEventListener('mouseleave', () => {
      isDragging = false;
    });
  }

  // Start automatic playback
  startAutoPlay();
}

// SWITCH VIRTUAL VIEWS
function switchView(viewName) {
  // Hide all virtual views dynamically
  document.querySelectorAll('.view-section').forEach(view => {
    view.classList.remove('active');
  });

  // Kéo về đầu trang của view mới
  if (typeof lenis !== 'undefined' && lenis) {
    lenis.scrollTo(0, { immediate: true });
  }
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Show target view
  const targetViewEl = document.getElementById(`${viewName}View`);
  if (targetViewEl) {
    targetViewEl.classList.add('active');

    // Smooth GSAP View Entrance Transition
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(targetViewEl,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power2.out',
          onComplete: () => {
            if (typeof ScrollTrigger !== 'undefined') {
              ScrollTrigger.refresh();
            }
          }
        }
      );
    }
  }

  // Update Navbar Active States
  const allNavLinks = document.querySelectorAll('[data-nav]');
  allNavLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-nav') === viewName) {
      link.classList.add('active');
    }
  });

  // Highlight parent dropdown toggle if viewing about or team
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  if (dropdownToggle) {
    if (viewName === 'about' || viewName === 'team') {
      dropdownToggle.classList.add('active');
    } else {
      dropdownToggle.classList.remove('active');
    }
  }

  // Reset + replay team banner animation when switching to team view
  if (viewName === 'team') {
    const overlay = document.querySelector('#teamView .team-banner-overlay');
    const title = document.querySelector('#teamView .team-banner-title');
    const sub = document.querySelector('#teamView .team-banner-sub');
    [overlay, title, sub].forEach(el => {
      if (!el) return;
      el.style.animation = 'none';
      // Force reflow để reset animation
      void el.offsetWidth;
      el.style.animation = '';
    });

    // Ẩn thanh sidebar scrollbar khi vừa vào trang team để không che ảnh thành viên
    const rail = document.getElementById('nauticalScrollRail');
    if (rail) {
      rail.classList.add('rail-hidden');
    }

    // Reset slider thành viên về index 0 khi vào team view
    if (typeof resetEditorialSlider === 'function') {
      resetEditorialSlider();
    }

    // Cuộn trang lên đầu banner của teamView
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Với các view khác, bỏ class rail-hidden
    const rail = document.getElementById('nauticalScrollRail');
    if (rail) {
      rail.classList.remove('rail-hidden');
    }
  }

  // Handle cards view switch
  if (viewName === 'cards') {
    renderCards();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }, 100);
  }

  // Handle about view switch
  if (viewName === 'about') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof replayAboutAnimations === 'function') {
      replayAboutAnimations();
    }
    setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }, 100);
  }

  // Handle gameplay view switch
  if (viewName === 'gameplay') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }, 100);
  }

  // Ensure header is revealed when switching views
  const headerEl = document.getElementById('header');
  if (headerEl) {
    headerEl.classList.remove('header-hidden');
  }

  // Close mobile drawer
  mobileToggle.classList.remove('active');
  mobileNav.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// RENDER CARDS GRID WITH GSAP STAGGER & 3D TILT
function renderCards() {
  cardsGrid.innerHTML = '';

  // Filter cards based on tab and search query
  const filteredCards = CARDS_DATA.filter(card => {
    const matchesTab = activeCategory === 'all' || card.category === activeCategory;
    const matchesSearch = card.title.toLowerCase().includes(searchQuery) ||
      card.effect.toLowerCase().includes(searchQuery);
    return matchesTab && matchesSearch;
  });

  if (filteredCards.length === 0) {
    cardsGrid.innerHTML = `
      <div class="loading-placeholder">
        <p>Không tìm thấy thẻ bài phù hợp với từ khóa "${searchQuery}"</p>
      </div>
    `;
    return;
  }

  // Create card items
  filteredCards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = `card-item card-cat-${card.category}`;
    cardEl.innerHTML = `
      <div class="card-img-container">
        <img src="${card.image}" alt="${card.title}" class="card-img" loading="lazy">
      </div>
      <div class="card-info">
        <div class="card-info-header">
          <span class="card-type type-${card.category}">${card.categoryText}</span>
          <span class="card-anchor-badge" aria-hidden="true">⚓</span>
        </div>
        <h3 class="card-title">${card.title}</h3>
        <p class="card-desc">${card.effect}</p>
      </div>
    `;

    // 3D Card Hover Tilt Interaction
    if (typeof gsap !== 'undefined') {
      cardEl.addEventListener('mousemove', (e) => {
        const rect = cardEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        gsap.to(cardEl, {
          rotateX,
          rotateY,
          transformPerspective: 800,
          duration: 0.25,
          ease: 'power1.out'
        });
      });

      cardEl.addEventListener('mouseleave', () => {
        gsap.to(cardEl, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    }

    // Add click event to open details modal
    cardEl.addEventListener('click', () => openCardModal(card));

    cardsGrid.appendChild(cardEl);
  });

  // Staggered Cascade Entrance for Cards
  if (typeof gsap !== 'undefined') {
    gsap.fromTo('.card-item',
      { opacity: 0, y: 24, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.025,
        ease: 'power2.out',
        clearProps: 'opacity,transform'
      }
    );
  }
}

// 4 CATEGORIES MASTER DATA FOR BLOCK 4 PILLARS & 3D MODAL SHOWCASE
const PILLAR_CATEGORIES_DATA = {
  'phuong-tien': {
    category: 'phuong-tien',
    categoryText: 'Thẻ Phương Tiện',
    countText: '10 Thẻ Vận Tải',
    title: '10 THẺ PHƯƠNG TIỆN ĐA PHƯƠNG THỨC',
    backImage: 'assets/card-back-phuongtien.png',
    defaultFrontImage: 'assets/The Phuong Tien/0.MẶT TRƯỚC.png',
    effect: 'Động lực chuyên chở cốt lõi của chuỗi cung ứng. Bao gồm 4 phương thức chính: Đường biển (Tàu container), Đường hàng không (Máy bay phản lực), Đường sắt (Tàu hỏa liên vận) và Đường bộ (Xe đầu kéo).',
    strategy: 'Mỗi loại phương tiện mang tải trọng, chi phí cước và tốc độ di chuyển khác biệt. Kết hợp linh hoạt đa phương thức giúp giải phóng container kẹt cảng và đẩy nhanh tiến độ hoàn thành đơn hàng.',
    subcards: [
      { title: 'Tàu Container Biển', image: 'assets/The Phuong Tien/0.MẶT TRƯỚC.png' },
      { title: 'Máy Bay Vận Tải', image: 'assets/The Phuong Tien/1 2 3 4.png' }
    ]
  },
  'su-kien': {
    category: 'su-kien',
    categoryText: 'Thẻ Sự Kiện',
    countText: '24 Thẻ Biến Cố',
    title: '24 THẺ SỰ KIỆN & BIẾN CỐ ĐẠI DƯƠNG',
    backImage: 'assets/card-back-sukien.png',
    defaultFrontImage: 'assets/The Su Kien/BÃO NHIỆT ĐỚI.png',
    effect: 'Tái hiện chân thực các rủi ro vận tải thực tế: Bão biển nhiệt đới, cướp biển vịnh Aden, tắc nghẽn kênh đào Suez, đình công cảng biển hay khủng hoảng biến động giá nhiên liệu toàn cầu.',
    strategy: 'Yếu tố xoay chuyển tình thế bất ngờ! Sử dụng thẻ sự kiện đúng thời điểm để làm chậm bước tiến của đối thủ đang dẫn đầu hoặc tự bảo hiểm bảo vệ đội tàu của mình.',
    subcards: [
      { title: 'Bão Nhiệt Đới', image: 'assets/The Su Kien/BÃO NHIỆT ĐỚI.png' }
    ]
  },
  'cho': {
    category: 'cho',
    categoryText: 'Thẻ Chợ',
    countText: '34 Thẻ Dịch Vụ',
    title: '34 THẺ CHỢ & HỢP ĐỒNG LOGISTICS',
    backImage: 'assets/card-back-cho.png',
    defaultFrontImage: 'assets/The Cho/Chứng chỉ FIATA.png',
    effect: 'Cung cấp các công cụ kinh doanh và hợp đồng ủy thác: Chứng chỉ giao nhận FIATA, thuê tàu FCL/LCL, mua bảo hiểm hàng hóa All Risks, nâng cấp kho bãi và bốc dỡ tự động.',
    strategy: 'Tích lũy tài nguyên và thẻ chứng chỉ để giảm thiểu chi phí phát sinh, mở rộng sức chứa kho bãi và nhận thêm tiền thưởng khi kết thúc hải trình.',
    subcards: [
      { title: 'Chứng chỉ FIATA', image: 'assets/The Cho/Chứng chỉ FIATA.png' }
    ]
  },
  'incoterm': {
    category: 'incoterm',
    categoryText: 'Thẻ Incoterms',
    countText: '11 Thẻ Cảng',
    title: '11 THẺ CẢNG INCOTERMS 2020',
    backImage: 'assets/card-back-incoterm.png',
    defaultFrontImage: 'assets/The Incoterm/CIF.png',
    effect: 'Mỗi cảng biển đại diện cho 1 điều khoản thương mại quốc tế Incoterms 2020 (EXW, FCA, FAS, FOB, CFR, CIF, CPT, CIP, DAP, DPU, DDP) với quy tắc phân chia cước phí và trách nhiệm rủi ro chính xác.',
    strategy: 'Điều hướng tàu chở hàng cập đúng cảng khớp với hợp đồng bạn đang nắm giữ. Tránh giao hàng tại các cảng có rủi ro cao vượt quá khả năng tài chính của bạn.',
    subcards: [
      { title: 'CIF (Cost, Insurance, Freight)', image: 'assets/The Incoterm/CIF.png' },
      { title: 'FOB (Free On Board)', image: 'assets/The Incoterm/FOB.png' },
      { title: 'EXW (Ex Works)', image: 'assets/The Incoterm/EXW.png' },
      { title: 'DDP (Delivered Duty Paid)', image: 'assets/The Incoterm/DDP.png' },
      { title: 'DPU (Delivered Unloaded)', image: 'assets/The Incoterm/DPU.png' }
    ]
  }
};

// MODAL INTERACTIONS & 3D FLIP CARD LOGIC
let isModalCardFlipped = false;
let currentModalCategory = 'su-kien';
let currentModalSubcardsList = [];
let currentModalCardIndex = 0;
let isGalleryDragging = false;

function toggleModalCardFlip(forceState) {
  const flipCard = document.getElementById('modalFlipCard');
  if (!flipCard) return;

  if (typeof forceState === 'boolean') {
    isModalCardFlipped = forceState;
  } else {
    isModalCardFlipped = !isModalCardFlipped;
  }

  if (isModalCardFlipped) {
    flipCard.classList.add('is-flipped');
  } else {
    flipCard.classList.remove('is-flipped');
  }
}

function updateModalIndicator(index, total) {
  const indicator = document.getElementById('modalCarouselIndicator');
  if (indicator) {
    indicator.textContent = `Thẻ ${index + 1} / ${total}`;
  }
}

function selectModalSubcard(index) {
  if (!currentModalSubcardsList || currentModalSubcardsList.length === 0) return;
  if (index < 0) index = 0;
  if (index >= currentModalSubcardsList.length) index = currentModalSubcardsList.length - 1;

  const prevIndex = currentModalCardIndex;
  const isForward = index >= prevIndex;
  currentModalCardIndex = index;
  const sub = currentModalSubcardsList[index];
  const catData = PILLAR_CATEGORIES_DATA[currentModalCategory] || PILLAR_CATEGORIES_DATA['su-kien'];

  const cardFrontImg = document.getElementById('modalCardFrontImg');
  const cardTitle = document.getElementById('modalCardTitle');
  const cardEffect = document.getElementById('modalCardEffect');
  const cardStrategy = document.getElementById('modalCardStrategy');
  const gallery = document.getElementById('modalSubcardsGallery');

  if (cardFrontImg) cardFrontImg.src = sub.image;
  if (cardTitle) cardTitle.textContent = sub.title;
  if (cardEffect) {
    cardEffect.innerHTML = sub.effect ? sub.effect : `<strong>Quy tắc:</strong> ${catData.effect}`;
  }
  if (cardStrategy) {
    cardStrategy.textContent = sub.strategy || catData.strategy;
  }

  // Trigger Elastic 3D Card Deck Slide animation
  const cardFrontFace = document.querySelector('.modal-flip-front');
  if (cardFrontFace) {
    cardFrontFace.classList.remove('slide-next', 'slide-prev', 'card-swap-anim');
    void cardFrontFace.offsetWidth; // Reflow to restart animation
    cardFrontFace.classList.add(isForward ? 'slide-next' : 'slide-prev');
  }

  [cardTitle, cardEffect, cardStrategy].forEach(el => {
    if (el) {
      el.classList.remove('modal-text-fade-in');
      void el.offsetWidth; // Reflow to restart animation
      el.classList.add('modal-text-fade-in');
    }
  });

  // Update Active Thumbnail & Scroll into view
  if (gallery) {
    const thumbs = gallery.querySelectorAll('.modal-subcard-thumb');
    thumbs.forEach((t, idx) => {
      if (idx === index) {
        t.classList.add('active');
        t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        t.classList.remove('active');
      }
    });
  }

  updateModalIndicator(index, currentModalSubcardsList.length);

  // Auto flip to front face if user is inspecting specific card
  toggleModalCardFlip(true);
}

function openPillarCategoryModal(categoryKey) {
  currentModalCategory = categoryKey;
  const data = PILLAR_CATEGORIES_DATA[categoryKey] || PILLAR_CATEGORIES_DATA['su-kien'];
  const cardBackImg = document.getElementById('modalCardBackImg');
  const cardFrontImg = document.getElementById('modalCardFrontImg');
  const cardType = document.getElementById('modalCardType');
  const cardTitle = document.getElementById('modalCardTitle');
  const cardEffect = document.getElementById('modalCardEffect');
  const cardStrategy = document.getElementById('modalCardStrategy');
  const gallery = document.getElementById('modalSubcardsGallery');

  if (cardBackImg) cardBackImg.src = data.backImage;
  if (cardFrontImg) cardFrontImg.src = data.defaultFrontImage;
  if (cardType) {
    cardType.textContent = data.categoryText;
    cardType.className = `modal-card-type type-${data.category}`;
  }
  if (cardEffect) cardEffect.textContent = data.effect;
  if (cardStrategy) cardStrategy.textContent = data.strategy;

  // Lọc danh sách thẻ thực tế từ CARDS_DATA thuộc nhóm này
  const matchingCards = CARDS_DATA.filter(c => c.category === data.category);
  currentModalSubcardsList = matchingCards.length > 0 ? matchingCards : (data.subcards || []);
  currentModalCardIndex = 0;

  // Render Subcards Thumbnails vào Băng chuyền cuộn ngang
  if (gallery) {
    gallery.innerHTML = '';

    currentModalSubcardsList.forEach((sub, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `modal-subcard-thumb ${idx === 0 ? 'active' : ''}`;
      thumb.title = sub.title;
      thumb.setAttribute('data-index', idx);
      thumb.innerHTML = `<img src="${sub.image}" alt="${sub.title}" loading="lazy">`;

      thumb.addEventListener('click', () => {
        if (isGalleryDragging) return;
        selectModalSubcard(idx);
      });

      gallery.appendChild(thumb);
    });

    // Reset cuộn gallery về đầu
    gallery.scrollLeft = 0;
  }

  // Mặc định chọn thẻ đầu tiên
  if (currentModalSubcardsList.length > 0) {
    selectModalSubcard(0);
  } else {
    if (cardTitle) cardTitle.textContent = data.title;
    updateModalIndicator(0, 0);
  }

  // Mặc định hiển thị mặt sau Container 3D (Ngang) và nhấp để lật (Dọc)
  toggleModalCardFlip(false);

  cardModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openCardModal(card) {
  // Map regular card click (from database page) to 3D showcase
  currentModalCategory = card.category;
  const cardBackImg = document.getElementById('modalCardBackImg');
  const cardFrontImg = document.getElementById('modalCardFrontImg');
  const cardType = document.getElementById('modalCardType');
  const cardTitle = document.getElementById('modalCardTitle');
  const cardEffect = document.getElementById('modalCardEffect');
  const cardStrategy = document.getElementById('modalCardStrategy');
  const gallery = document.getElementById('modalSubcardsGallery');

  const catData = PILLAR_CATEGORIES_DATA[card.category] || PILLAR_CATEGORIES_DATA['su-kien'];

  if (cardBackImg) cardBackImg.src = catData.backImage;
  if (cardFrontImg) cardFrontImg.src = card.image;
  if (cardType) {
    cardType.textContent = card.categoryText;
    cardType.className = `modal-card-type type-${card.category}`;
  }
  if (cardTitle) cardTitle.textContent = card.title;
  if (cardEffect) cardEffect.textContent = card.effect;
  if (cardStrategy) cardStrategy.textContent = card.strategy;

  const matchingCards = CARDS_DATA.filter(c => c.category === card.category);
  currentModalSubcardsList = matchingCards.length > 0 ? matchingCards : (catData.subcards || []);

  const cardIdx = currentModalSubcardsList.findIndex(c => c.title === card.title || c.image === card.image);
  currentModalCardIndex = cardIdx >= 0 ? cardIdx : 0;

  if (gallery) {
    gallery.innerHTML = '';
    currentModalSubcardsList.forEach((sub, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `modal-subcard-thumb ${idx === currentModalCardIndex ? 'active' : ''}`;
      thumb.title = sub.title;
      thumb.setAttribute('data-index', idx);
      thumb.innerHTML = `<img src="${sub.image}" alt="${sub.title}" loading="lazy">`;

      thumb.addEventListener('click', () => {
        if (isGalleryDragging) return;
        selectModalSubcard(idx);
      });

      gallery.appendChild(thumb);
    });

    setTimeout(() => {
      const activeThumb = gallery.querySelector('.modal-subcard-thumb.active');
      if (activeThumb) activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }, 100);
  }

  updateModalIndicator(currentModalCardIndex, currentModalSubcardsList.length);

  // Directly show the front face for explicit single-card clicks
  toggleModalCardFlip(true);

  cardModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCardModal() {
  cardModal.classList.remove('active');
  if (!mobileNav || !mobileNav.classList.contains('active')) {
    document.body.style.overflow = 'auto';
  }
}

// BIND BLOCK 4 FAN DECK & 3D MODAL EVENTS
function initBlock4PillarsEvents() {
  // 1. Click on Fan Deck cards
  const fandeckCards = document.querySelectorAll('.pillar-fandeck-card');
  fandeckCards.forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      if (cat) openPillarCategoryModal(cat);
    });
  });

  // 2. Click on Pill Selector Buttons below Fan Deck
  const selectBtns = document.querySelectorAll('.pillar-select-btn');
  selectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      if (cat) openPillarCategoryModal(cat);
    });
  });

  // 3. 3D Card Flip interaction directly on card click & Podium trigger
  const flipWrapper = document.getElementById('modalFlipWrapper');
  if (flipWrapper) {
    flipWrapper.addEventListener('click', () => toggleModalCardFlip());
  }

  const flipActionBtn = document.getElementById('modalFlipActionBtn');
  if (flipActionBtn) {
    flipActionBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleModalCardFlip();
    });
  }

  // 4. MOUSE WHEEL STEP-BY-STEP CARD NAVIGATOR (Lăn chuột để nhảy từng thẻ cho đến hết)
  const subcardsSection = document.querySelector('.modal-subcards-section');
  const gallery = document.getElementById('modalSubcardsGallery');

  let lastWheelStepTime = 0;
  const WHEEL_STEP_INTERVAL = 200; // ms threshold between card jumps (phù hợp với animation 0.42s)

  if (gallery) {
    const handleWheelStep = (e) => {
      const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
      if (delta !== 0) {
        e.preventDefault();
        e.stopPropagation();

        const now = Date.now();
        if (now - lastWheelStepTime < WHEEL_STEP_INTERVAL) return;
        lastWheelStepTime = now;

        if (delta > 0) {
          // Lăn chuột xuống -> Nhảy sang thẻ kế tiếp
          if (currentModalCardIndex < currentModalSubcardsList.length - 1) {
            selectModalSubcard(currentModalCardIndex + 1);
          }
        } else {
          // Lăn chuột lên -> Quay lại thẻ trước
          if (currentModalCardIndex > 0) {
            selectModalSubcard(currentModalCardIndex - 1);
          }
        }
      }
    };

    gallery.addEventListener('wheel', handleWheelStep, { passive: false });
    if (subcardsSection) {
      subcardsSection.addEventListener('wheel', handleWheelStep, { passive: false });
    }

    // Drag-to-scroll gesture for desktop mouse
    let isDown = false;
    let startX = 0;
    let scrollStartLeft = 0;

    gallery.addEventListener('mousedown', (e) => {
      isDown = true;
      isGalleryDragging = false;
      startX = e.pageX - gallery.offsetLeft;
      scrollStartLeft = gallery.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        setTimeout(() => { isGalleryDragging = false; }, 60);
      }
    });

    gallery.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      const x = e.pageX - gallery.offsetLeft;
      const walk = (x - startX);
      if (Math.abs(walk) > 4) {
        isGalleryDragging = true;
        e.preventDefault();
        gallery.scrollLeft = scrollStartLeft - (walk * 1.4);
      }
    });
  }

  // 6. Keyboard navigation (Left / Right arrow & Escape)
  document.addEventListener('keydown', (e) => {
    if (!cardModal || !cardModal.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') {
      selectModalSubcard(currentModalCardIndex - 1);
    } else if (e.key === 'ArrowRight') {
      selectModalSubcard(currentModalCardIndex + 1);
    } else if (e.key === 'Escape') {
      closeCardModal();
    } else if (e.key === ' ' || e.key === 'Enter') {
      if (document.activeElement && document.activeElement.tagName !== 'BUTTON') {
        e.preventDefault();
        toggleModalCardFlip();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initBlock4PillarsEvents();
});

// ==========================================
// EDITORIAL FULLSCREEN SPLIT CURTAIN REVEAL SLIDER
// ==========================================
// 15. EDITORIAL TEAM SPLIT SLIDER (FULLSCREEN PINNED STEP SCROLL)
// ==========================================
let currentEditorialIndex = 0;
let isEditorialAnimating = false;

function initEditorialSlider() {
  const container = document.getElementById('editorialTeamSlider');
  if (!container) return;

  const cards = container.querySelectorAll('.editorial-member-card');
  const dots = container.querySelectorAll('.slider-progress-dots .dot');
  const totalCards = cards.length;

  function updateDots(index) {
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function goToCard(targetIndex) {
    if (isEditorialAnimating || targetIndex === currentEditorialIndex) return;
    if (targetIndex < 0 || targetIndex >= totalCards) return;

    isEditorialAnimating = true;
    const currentCard = cards[currentEditorialIndex];
    const nextCard = cards[targetIndex];

    // Thêm class splitting để trigger hiệu ứng tách đôi sang 2 bên
    currentCard.classList.add('splitting');

    // Hiện card tiếp theo đằng sau
    nextCard.classList.add('active');

    setTimeout(() => {
      // Sau khi kết thúc animation tách đôi (850ms)
      currentCard.classList.remove('active', 'splitting');
      currentEditorialIndex = targetIndex;
      updateDots(currentEditorialIndex);
      isEditorialAnimating = false;
    }, 850);
  }

  // Click vào bất kỳ điểm nào trên container để chuyển tới card tiếp theo
  container.addEventListener('click', (e) => {
    // Nếu click vào dot pagination thì chuyển tới đúng dot đó
    const clickedDot = e.target.closest('.dot');
    if (clickedDot) {
      const dotIndex = parseInt(clickedDot.getAttribute('data-index'), 10);
      if (!isNaN(dotIndex)) {
        goToCard(dotIndex);
        return;
      }
    }

    if (isEditorialAnimating) return;

    // Click -> next member. Nếu đang ở thành viên cuối thì loop về đầu
    if (currentEditorialIndex < totalCards - 1) {
      goToCard(currentEditorialIndex + 1);
    } else {
      goToCard(0);
    }
  });

  // Xử lý sự kiện cuộn chuột (Wheel Scroll Locking & Step-by-Step Navigation)
  let scrollThrottle = false;

  function handleWheel(e) {
    const isTeamActive = document.getElementById('teamView')?.classList.contains('active');
    if (!isTeamActive) return;

    const rect = container.getBoundingClientRect();
    // Check if slider is taking over the screen
    const isSliderInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

    if (!isSliderInView) return;

    if (e.deltaY > 15) {
      // Cuộn xuống (Scroll DOWN)
      if (currentEditorialIndex < totalCards - 1) {
        // Chưa đến thành viên cuối cùng -> KHÓA CUỘN trang & chuyển sang thành viên tiếp theo
        e.preventDefault();
        if (Math.abs(rect.top) > 5) {
          window.scrollTo({ top: container.offsetTop, behavior: 'smooth' });
        }
        if (!scrollThrottle && !isEditorialAnimating) {
          scrollThrottle = true;
          goToCard(currentEditorialIndex + 1);
          setTimeout(() => { scrollThrottle = false; }, 850);
        }
      }
      // Khi đã ở thành viên cuối (index === 4) -> KHÔNG chặn preventDefault để cuộn xuống Footer
    } else if (e.deltaY < -15) {
      // Cuộn lên (Scroll UP)
      if (currentEditorialIndex > 0) {
        // Chưa ở thành viên đầu tiên -> KHÓA CUỘN trang & lùi về thành viên trước
        e.preventDefault();
        if (Math.abs(rect.top) > 5) {
          window.scrollTo({ top: container.offsetTop, behavior: 'smooth' });
        }
        if (!scrollThrottle && !isEditorialAnimating) {
          scrollThrottle = true;
          goToCard(currentEditorialIndex - 1);
          setTimeout(() => { scrollThrottle = false; }, 850);
        }
      }
      // Khi đã ở thành viên đầu (index === 0) -> KHÔNG chặn preventDefault để cuộn lên trên
    }
  }

  window.addEventListener('wheel', handleWheel, { passive: false });

  // Touch Swipe cho Thiết bị di động
  let touchStartY = 0;
  container.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    const isTeamActive = document.getElementById('teamView')?.classList.contains('active');
    if (!isTeamActive) return;

    const rect = container.getBoundingClientRect();
    const isSliderInView = rect.top <= 60 && rect.bottom >= window.innerHeight - 60;
    if (!isSliderInView) return;

    const touchCurrentY = e.touches[0].clientY;
    const diff = touchStartY - touchCurrentY;

    if (diff > 25 && currentEditorialIndex < totalCards - 1) {
      e.preventDefault();
    } else if (diff < -25 && currentEditorialIndex > 0) {
      e.preventDefault();
    }
  }, { passive: false });

  container.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    if (Math.abs(diff) > 35 && !scrollThrottle && !isEditorialAnimating) {
      if (diff > 0) {
        if (currentEditorialIndex < totalCards - 1) {
          scrollThrottle = true;
          goToCard(currentEditorialIndex + 1);
          setTimeout(() => { scrollThrottle = false; }, 850);
        }
      } else {
        if (currentEditorialIndex > 0) {
          scrollThrottle = true;
          goToCard(currentEditorialIndex - 1);
          setTimeout(() => { scrollThrottle = false; }, 850);
        }
      }
    }
  }, { passive: true });

  // Reset slider về vị trí ban đầu
  window.resetEditorialSlider = function () {
    currentEditorialIndex = 0;
    isEditorialAnimating = false;
    scrollThrottle = false;
    cards.forEach((card, idx) => {
      card.classList.remove('splitting');
      if (idx === 0) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
    updateDots(0);
  };
}

// Khởi tạo slider & Băng chuyền ảnh Khối 1 & Khối 3 khi DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initEditorialSlider();
  initBlock1ShowcaseCarousel();
  initBlock3PhotoCarousel();
});

// ==========================================
// BLOCK 3 PHOTO SCROLL CAROUSEL (CARD DECK SWIPE / STACK POP)
// ==========================================
function initBlock3PhotoCarousel() {
  const card = document.getElementById('block3PhotoCard');
  const track = document.getElementById('block3PhotoTrack');
  if (!track || !card) return;

  const slides = Array.from(track.querySelectorAll('.photo-slide'));
  const totalSlides = slides.length;
  if (totalSlides === 0) return;

  let currentIndex = 0;
  let isAnimating = false;
  let lastWheelTime = 0;
  const WHEEL_DEBOUNCE = 420;

  function updateDeckClasses() {
    slides.forEach((slide, idx) => {
      slide.classList.remove('card-top', 'card-middle', 'card-bottom', 'card-swiping-out', 'card-swiping-in-reverse', 'active');

      const pos = (idx - currentIndex + totalSlides) % totalSlides;
      if (pos === 0) {
        slide.classList.add('card-top', 'active');
      } else if (pos === 1) {
        slide.classList.add('card-middle');
      } else {
        slide.classList.add('card-bottom');
      }
    });
  }

  function swipeNext() {
    if (isAnimating) return;
    isAnimating = true;

    const currentSlide = slides[currentIndex];
    currentSlide.classList.add('card-swiping-out');

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateDeckClasses();
      setTimeout(() => {
        isAnimating = false;
      }, 50);
    }, 380);
  }

  function swipePrev() {
    if (isAnimating) return;
    isAnimating = true;

    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    const prevSlide = slides[prevIndex];

    // Chuẩn bị vị trí lá bài bay ngược từ bên trái
    prevSlide.classList.remove('card-bottom', 'card-middle');
    prevSlide.classList.add('card-swiping-in-reverse');

    // Buộc trình duyệt tính toán lại vị trí (Force reflow)
    void prevSlide.offsetWidth;

    currentIndex = prevIndex;
    updateDeckClasses();

    setTimeout(() => {
      isAnimating = false;
    }, 550);
  }

  // Khởi tạo xếp chồng 3 lá bài
  updateDeckClasses();

  // Cơ chế cuộn chuột (Mouse Wheel) chuyển ảnh vòng lặp
  const handleWheel = (e) => {
    const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
    if (Math.abs(delta) < 12) return;

    const now = Date.now();
    if (now - lastWheelTime < WHEEL_DEBOUNCE || isAnimating) {
      e.preventDefault();
      return;
    }
    lastWheelTime = now;

    e.preventDefault();
    e.stopPropagation();

    if (delta > 0) {
      swipeNext();
    } else {
      swipePrev();
    }
  };

  card.addEventListener('wheel', handleWheel, { passive: false });

  // Hỗ trợ kéo chuột (Mouse drag) & Nhấp chuột chuyển ảnh (Click to swipe)
  let isDown = false;
  let startX = 0;
  let startY = 0;
  let didDrag = false;
  const dragThreshold = 25;

  card.addEventListener('mousedown', (e) => {
    if (isAnimating) return;
    isDown = true;
    didDrag = false;
    startX = e.pageX;
    startY = e.pageY;
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDown) return;
    isDown = false;
    const diffX = startX - e.pageX;
    if (Math.abs(diffX) > dragThreshold) {
      didDrag = true;
      if (diffX > 0) {
        swipeNext();
      } else {
        swipePrev();
      }
    }
  });

  // Bấm (Click) trực tiếp vào khung ảnh để rút thẻ bài tiếp theo
  card.addEventListener('click', (e) => {
    if (didDrag || isAnimating) {
      didDrag = false;
      return;
    }
    swipeNext();
  });

  // Hỗ trợ vuốt chạm & bấm cảm ứng trên di động / tablet (Touch swipe & Tap)
  let touchStartX = 0;
  let touchStartY = 0;

  card.addEventListener('touchstart', (e) => {
    if (isAnimating) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  card.addEventListener('touchend', (e) => {
    if (isAnimating) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    if (Math.abs(diffX) > 30 || Math.abs(diffY) > 40) {
      if (Math.abs(diffX) >= Math.abs(diffY)) {
        if (diffX > 0) {
          swipeNext();
        } else {
          swipePrev();
        }
      } else {
        if (diffY > 0) {
          swipeNext();
        } else {
          swipePrev();
        }
      }
    } else {
      // Chạm (Tap) nhanh trên màn hình cảm ứng để chuyển ảnh
      swipeNext();
    }
  }, { passive: true });
}

// ==========================================
// BLOCK 1 SHOWCASE CAROUSEL (ORIGINAL ASPECT RATIO)
// ==========================================
function initBlock1ShowcaseCarousel() {
  const carouselWrap = document.getElementById('block1ShowcaseCarousel');
  const track = document.getElementById('block1CarouselTrack');
  const paginationBar = document.getElementById('block1PaginationBar');
  if (!track || !paginationBar) return;

  const slides = track.querySelectorAll('.showcase-slide');
  const dots = paginationBar.querySelectorAll('.showcase-dot');
  const totalSlides = slides.length;
  if (totalSlides === 0) return;

  let currentIndex = 0;
  let lastWheelTime = 0;
  const WHEEL_DEBOUNCE = 180;

  function updateActiveDot(index) {
    currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function scrollToSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    currentIndex = index;
    const slideWidth = track.clientWidth;
    track.scrollTo({
      left: currentIndex * slideWidth,
      behavior: 'smooth'
    });
    updateActiveDot(currentIndex);
  }

  // Wheel event for smooth step-by-step navigation
  const handleWheel = (e) => {
    const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
    if (delta !== 0) {
      e.preventDefault();
      e.stopPropagation();

      const now = Date.now();
      if (now - lastWheelTime < WHEEL_DEBOUNCE) return;
      lastWheelTime = now;

      if (delta > 0) {
        scrollToSlide(currentIndex + 1);
      } else {
        scrollToSlide(currentIndex - 1);
      }
    }
  };

  if (carouselWrap) {
    carouselWrap.addEventListener('wheel', handleWheel, { passive: false });
  }

  // Drag to scroll
  let isDown = false;
  let startX = 0;
  let scrollStartLeft = 0;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollStartLeft = track.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      const slideWidth = track.clientWidth;
      const nearestIndex = Math.round(track.scrollLeft / slideWidth);
      scrollToSlide(nearestIndex);
    }
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX);
    track.scrollLeft = scrollStartLeft - walk;
  });

  // Native scroll sync with pagination dots
  let scrollTimeout = null;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const slideWidth = track.clientWidth;
      if (slideWidth > 0) {
        const nearestIndex = Math.round(track.scrollLeft / slideWidth);
        updateActiveDot(nearestIndex);
      }
    }, 50);
  });

  // Dots click
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      scrollToSlide(idx);
    });
  });
}

/* ============================================================
   TOPDOWN SHIP CUSTOM SCROLLBAR LOGIC
   ============================================================ */
function initNauticalScrollRail() {
  const rail = document.getElementById('nauticalScrollRail');
  const track = document.getElementById('nauticalRailTrack');
  const progress = document.getElementById('nauticalRailProgress');
  const thumb = document.getElementById('nauticalShipThumb');

  if (!rail || !track || !progress || !thumb) return;

  let isDragging = false;
  let trackRect = null;

  function updateTrackRect() {
    trackRect = track.getBoundingClientRect();
  }

  let rafPending = false;

  // Update ship & progress water trail based on window scroll using rAF
  function onScrollSync() {
    if (isDragging || rafPending) return;

    rafPending = true;
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressRatio = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;
      const progressPercent = progressRatio * 100;

      // Ẩn thanh scrollbar tàu biển khi ở trên đỉnh trang của teamView
      const isTeamView = document.getElementById('teamView')?.classList.contains('active');
      if (isTeamView && scrollTop < 180) {
        rail.classList.add('rail-hidden');
      } else {
        rail.classList.remove('rail-hidden');
      }

      progress.style.height = `${progressPercent}%`;
      thumb.style.top = `${progressPercent}%`;
      thumb.setAttribute('aria-valuenow', Math.round(progressPercent));
      rafPending = false;
    });
  }

  window.addEventListener('scroll', onScrollSync, { passive: true });
  if (typeof lenis !== 'undefined' && lenis) {
    lenis.on('scroll', onScrollSync);
  }

  window.addEventListener('resize', () => {
    updateTrackRect();
    onScrollSync();
  }, { passive: true });

  // Handle clicking anywhere on the track to jump/scroll smoothly
  track.addEventListener('click', (e) => {
    if (e.target.closest('.nautical-ship-thumb')) return;
    updateTrackRect();
    const clickY = e.clientY - trackRect.top;
    const ratio = Math.min(Math.max(clickY / trackRect.height, 0), 1);
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = ratio * scrollHeight;

    if (lenis) {
      lenis.scrollTo(targetScroll, { duration: 1.0 });
    } else {
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  });

  // Handle dragging the topdown ship with live window scroll sync
  function startDrag(e) {
    isDragging = true;
    thumb.classList.add('is-dragging');
    document.body.style.userSelect = 'none';
    if (lenis) lenis.stop();
    updateTrackRect();
    onDragMove(e);
  }

  function onDragMove(e) {
    if (!isDragging || !trackRect) return;
    const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
    const relativeY = clientY - trackRect.top;
    const ratio = Math.min(Math.max(relativeY / trackRect.height, 0), 1);
    const percent = ratio * 100;

    progress.style.height = `${percent}%`;
    thumb.style.top = `${percent}%`;
    thumb.setAttribute('aria-valuenow', Math.round(percent));

    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetTop = ratio * scrollHeight;

    if (lenis) {
      lenis.scrollTo(targetTop, { immediate: true });
    } else {
      window.scrollTo({
        top: targetTop,
        behavior: 'auto'
      });
    }
  }

  function stopDrag() {
    if (isDragging) {
      isDragging = false;
      thumb.classList.remove('is-dragging');
      document.body.style.userSelect = '';
      if (lenis) lenis.start();
      onScrollSync();
    }
  }

  thumb.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    startDrag(e);
  });

  // Touch support for dragging
  thumb.addEventListener('touchstart', (e) => {
    startDrag(e);
  }, { passive: false });

  window.addEventListener('touchmove', (e) => {
    if (isDragging) {
      e.preventDefault();
      onDragMove(e);
    }
  }, { passive: false });

  window.addEventListener('touchend', stopDrag);

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      e.preventDefault();
      onDragMove(e);
    }
  });

  window.addEventListener('mouseup', stopDrag);

  // Initial Sync
  updateTrackRect();
  onScrollSync();
}



// ============================================================
// TACTICAL MARITIME BOARD GAME JOURNEY — KHỐI 5 LOGIC (16:10)
// ============================================================
function initTacticalBoardgameBlock5() {
  const boardgameSection = document.getElementById('block5-values');
  if (!boardgameSection) return;

  const trayItems = boardgameSection.querySelectorAll('.component-tray-item');
  const missionBtns = boardgameSection.querySelectorAll('.boardgame-mission-btn');
  const shipToken = document.getElementById('boardgameShipToken');
  const closeBtns = boardgameSection.querySelectorAll('.popover-close-btn');

  const shipTrayCoords = {
    '1': { left: '14%', top: '32%' },
    '2': { left: '38%', top: '70%' },
    '3': { left: '67%', top: '30%' },
    '4': { left: '89%', top: '68%' }
  };

  let currentActiveTray = '1';
  let autoTourTimer = null;
  let userInteracted = false;

  function setActiveTray(trayId, isUserAction = false) {
    if (isUserAction) {
      userInteracted = true;
      if (autoTourTimer) clearInterval(autoTourTimer);
    }

    currentActiveTray = String(trayId);

    // Update component trays
    trayItems.forEach(tray => {
      if (tray.getAttribute('data-tray') === currentActiveTray) {
        tray.classList.add('tray-active');
      } else {
        tray.classList.remove('tray-active');
      }
    });

    // Update bottom mission buttons
    missionBtns.forEach(btn => {
      if (btn.getAttribute('data-tray') === currentActiveTray) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Move 3D Ship Token to the selected tray location
    if (shipToken && shipTrayCoords[currentActiveTray]) {
      shipToken.style.left = shipTrayCoords[currentActiveTray].left;
      shipToken.style.top = shipTrayCoords[currentActiveTray].top;
    }
  }

  // Click on Component Tray 3D buttons & trays
  trayItems.forEach(tray => {
    const trayId = tray.getAttribute('data-tray');
    const trayBtn = tray.querySelector('.tray-3d-button');

    if (trayBtn) {
      trayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setActiveTray(trayId, true);
      });
    }

    tray.addEventListener('click', (e) => {
      if (!e.target.closest('.popover-close-btn')) {
        setActiveTray(trayId, true);
      }
    });
  });

  // Click on Bottom Mission Buttons
  missionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const trayId = btn.getAttribute('data-tray');
      setActiveTray(trayId, true);
    });
  });

  // Close popover buttons
  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      userInteracted = true;
      if (autoTourTimer) clearInterval(autoTourTimer);
      const parentTray = btn.closest('.component-tray-item');
      if (parentTray) {
        parentTray.classList.remove('tray-active');
      }
    });
  });

  // Auto-tour gentle voyage when section is in viewport
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !userInteracted) {
          if (!autoTourTimer) {
            autoTourTimer = setInterval(() => {
              if (userInteracted) {
                clearInterval(autoTourTimer);
                return;
              }
              let nextTray = parseInt(currentActiveTray) + 1;
              if (nextTray > 4) nextTray = 1;
              setActiveTray(String(nextTray), false);
            }, 5500);
          }
        } else {
          if (autoTourTimer) {
            clearInterval(autoTourTimer);
            autoTourTimer = null;
          }
        }
      });
    }, { threshold: 0.35 });

    observer.observe(boardgameSection);
  }

  // Initial position
  setActiveTray('1', false);
}

// ============================================================
// ABOUT VIEW REDESIGN ANIMATIONS & FAN-OUT CARDS SPOTLIGHT
// ============================================================
const SPOTLIGHT_CARDS_DATA = {
  fcl: {
    category: 'THẺ CHỢ EXW — TÁC CHIẾN TỐC ĐỘ',
    name: 'FCL KHẨN CẤP',
    effect: 'Cho phép người chơi điều động ngay 01 con tàu rời cảng bốc hàng mà không cần đợi đủ số lượng container theo quy định tải trọng.',
    tip: '💡 Mẹo tác chiến: Tung thẻ bất ngờ khi tàu mới chỉ có duy nhất container của bạn để cướp trọn điểm cảng nhanh, khiến đối thủ trở tay không kịp!',
    theme: '#0284C7'
  },
  fiata: {
    category: 'THẺ CHỢ EXW — TÍCH SẢN DÀI HẠN',
    name: 'CHỨNG CHỈ FIATA',
    effect: 'Chứng chỉ hành nghề giao nhận quốc tế cao cấp. Mỗi chứng chỉ sở hữu ở cuối ván sẽ nhân hệ số điểm uy tín (1 thẻ = 4đ, 2 thẻ = 10đ, 3 thẻ = 18đ, 4 thẻ = 30đ).',
    tip: '💡 Mẹo tác chiến: Chiến lược "ăn chắc mặc bền" cực kỳ đáng sợ nếu bạn gom từ 3 chứng chỉ trở lên mà không cần tranh giành quá nhiều bến cảng.',
    theme: '#D97706'
  },
  storm: {
    category: 'THẺ BIẾN CỐ HẢI TRÌNH — ĐẠI DƯƠNG',
    name: 'BÃO NHIỆT ĐỚI',
    effect: 'Bão cấp 12 đổ bộ bất ngờ. Toàn bộ tàu đang trên biển không có điều khoản bảo hiểm (CIF/CIP) bị trừ 2 điểm uy tín mỗi container. Tàu có bảo hiểm được bồi thường trọn vẹn và nhận thêm +3 điểm thưởng danh tiếng.',
    tip: '💡 Mẹo tác chiến: Luôn chuẩn bị trước điều khoản bảo hiểm CIF trước khi thả thẻ Bão để biến tổn thất của đối phương thành chiến thắng của bạn!',
    theme: '#0891B2'
  },
  tax: {
    category: 'THẺ BIẾN CỐ HẢI TRÌNH — THUẾ QUAN',
    name: 'THUẾ BẤT NGỜ',
    effect: 'Hải quan nước sở tại tăng thuế nhập khẩu khẩn cấp. Mọi hợp đồng giao hàng thông thường bị phạt 3 điểm chi phí. Riêng người nắm giữ hợp đồng DDP (Giao đã nộp thuế) được miễn trừ hoàn toàn.',
    tip: '💡 Mẹo tác chiến: "Cú chốt hạ" hủy diệt ở vòng 5 hoặc 6 khi đối thủ đang dồn toàn bộ hàng vào các cảng thông thường mà chưa đóng thuế.',
    theme: '#7C3AED'
  },
  emptyship: {
    category: 'THẺ CHỢ EXW — ĐIỀU ĐỘNG HẢI ĐỘI',
    name: 'TÀU CHẠY RỖNG',
    effect: 'Cho phép triệu hồi 01 con tàu đã cập bến trong vòng hiện tại quay trở lại bến bốc hàng ngay lập tức ở trạng thái sẵn sàng nhận container mới.',
    tip: '💡 Mẹo tác chiến: Giải cứu bạn khỏi thế bế tắc khi tất cả tàu lớn đã ra khơi hết và bạn vẫn còn thừa container trong kho chưa kịp xuất xưởng!',
    theme: '#EA580C'
  }
};

function selectSpotlightCard(cardKey) {
  const cardData = SPOTLIGHT_CARDS_DATA[cardKey];
  if (!cardData) return;

  const detailBox = document.getElementById('aboutCardDetailBox');
  const catEl = document.getElementById('cardDetailCategory');
  const nameEl = document.getElementById('cardDetailName');
  const effEl = document.getElementById('cardDetailEffect');
  const tipEl = document.getElementById('cardDetailTip');

  // Update active card class
  const allCards = document.querySelectorAll('.about-fan-card');
  allCards.forEach(c => {
    if (c.getAttribute('data-card') === cardKey) {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });

  if (detailBox && catEl && nameEl && effEl && tipEl) {
    if (typeof gsap !== 'undefined') {
      gsap.to([catEl, nameEl, effEl, tipEl], {
        opacity: 0,
        y: 4,
        duration: 0.12,
        onComplete: () => {
          catEl.textContent = cardData.category;
          catEl.style.color = cardData.theme;
          nameEl.textContent = cardData.name;
          effEl.textContent = cardData.effect;
          tipEl.innerHTML = cardData.tip;
          detailBox.style.borderLeftColor = cardData.theme;

          gsap.to([catEl, nameEl, effEl, tipEl], {
            opacity: 1,
            y: 0,
            duration: 0.22,
            stagger: 0.03,
            ease: 'power2.out'
          });
        }
      });
    } else {
      catEl.textContent = cardData.category;
      catEl.style.color = cardData.theme;
      nameEl.textContent = cardData.name;
      effEl.textContent = cardData.effect;
      tipEl.innerHTML = cardData.tip;
      detailBox.style.borderLeftColor = cardData.theme;
    }
  }
}

function initAboutRedesignAnimations() {
  const aboutSection = document.getElementById('aboutRedesign');
  if (!aboutSection) return;

  // Bind click & hover events on fan cards
  const fanCards = aboutSection.querySelectorAll('.about-fan-card');
  fanCards.forEach(card => {
    const cardKey = card.getAttribute('data-card');
    card.addEventListener('mouseenter', () => selectSpotlightCard(cardKey));
    card.addEventListener('click', () => selectSpotlightCard(cardKey));
    card.addEventListener('focus', () => selectSpotlightCard(cardKey));
  });

  const fadeElements = aboutSection.querySelectorAll('.about-fade-up');

  if ('IntersectionObserver' in window) {
    const aboutObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.getAttribute('data-delay') || '0', 10);

          setTimeout(() => {
            el.classList.add('is-visible');

            // GSAP enhanced entrance
            if (typeof gsap !== 'undefined') {
              // If this element contains a photo stack, animate images with back.out spring
              const photoStack = el.querySelector('.about-photo-stack') || (el.classList.contains('about-photo-stack') ? el : null);
              if (photoStack) {
                const imgs = photoStack.querySelectorAll('img');
                gsap.fromTo(imgs,
                  { opacity: 0, scale: 0.82, y: 25 },
                  { opacity: 1, scale: 1, y: 0, duration: 0.75, stagger: 0.12, ease: 'back.out(1.4)' }
                );
              }

              // If this element is the spotlight section, animate fan cards in an arc wave
              if (el.classList.contains('about-spotlight-section')) {
                const cards = el.querySelectorAll('.about-fan-card');
                gsap.fromTo(cards,
                  { opacity: 0, scale: 0.75, y: 40 },
                  { opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'back.out(1.5)' }
                );
              }
            }
          }, delay);

          observer.unobserve(el);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    fadeElements.forEach(el => aboutObserver.observe(el));
  } else {
    // Fallback if no IntersectionObserver
    fadeElements.forEach(el => el.classList.add('is-visible'));
  }
}

function replayAboutAnimations() {
  const aboutSection = document.getElementById('aboutRedesign');
  if (!aboutSection) return;

  const fadeElements = aboutSection.querySelectorAll('.about-fade-up');
  fadeElements.forEach(el => {
    el.classList.remove('is-visible');
    const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
    setTimeout(() => {
      el.classList.add('is-visible');
    }, delay + 50);
  });

  if (typeof gsap !== 'undefined') {
    const photoStacks = aboutSection.querySelectorAll('.about-photo-stack');
    photoStacks.forEach(stack => {
      const imgs = stack.querySelectorAll('img');
      gsap.fromTo(imgs,
        { opacity: 0, scale: 0.85, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'back.out(1.4)' }
      );
    });

    const fanCards = aboutSection.querySelectorAll('.about-fan-card');
    if (fanCards.length > 0) {
      gsap.fromTo(fanCards,
        { opacity: 0, scale: 0.8, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'back.out(1.5)', delay: 0.12 }
      );
    }
  }
}

// ============================================================
// GAMEPLAY VIEW ANIMATIONS (SCROLLYTELLING - TACTICAL BOARD GAME HUB)
// ============================================================
function initGameplayAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const gameplaySection = document.getElementById('gameplayBrightSection') || document.querySelector('.gameplay-bright-section');
  if (!gameplaySection) return;

  // 1. Animate the timeline line fill
  const progressLine = document.getElementById('timelineProgress');
  const timelineContainer = document.querySelector('.gameplay-scrollytelling-bright');
  if (progressLine && timelineContainer) {
    gsap.to(progressLine, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: timelineContainer,
        start: 'top 65%',
        end: 'bottom 75%',
        scrub: 0.5,
      }
    });
  }

  // 2. Animate nodes and content cards when they come into view
  const stations = document.querySelectorAll('.gameplay-station-item');
  stations.forEach((station, index) => {
    const node = station.querySelector('.station-node');
    const card = station.querySelector('.station-card-bright');

    // Node activation
    if (node) {
      ScrollTrigger.create({
        trigger: station,
        start: 'top 65%',
        onEnter: () => node.classList.add('active'),
        onLeaveBack: () => node.classList.remove('active'),
      });
    }

    // Content card fade & float up
    if (card) {
      gsap.fromTo(card,
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: {
            trigger: station,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Number counter animation for phase 4
    if (station.id === 'phase4' || station.classList.contains('phase-4')) {
      const scoreEl = document.getElementById('victoryScore');
      if (scoreEl) {
        ScrollTrigger.create({
          trigger: station,
          start: 'top 65%',
          onEnter: () => {
            gsap.to(scoreEl, {
              innerHTML: 1000000,
              duration: 2.2,
              snap: { innerHTML: 1 },
              onUpdate: function () {
                scoreEl.innerHTML = Number(scoreEl.innerHTML).toLocaleString('en-US');
              },
              ease: 'power3.out'
            });
          },
          once: true
        });
      }
    }
  });

  // 3. Interactive Freight Dice Roller with Document Delegation
  const diceRates = [
    { rate: '$10,000 / TEU', tag: '⚓ Cước Thấp — Mùa Thấp Điểm' },
    { rate: '$15,000 / TEU', tag: '⚓ Cước Tiết Kiệm Khởi Đầu' },
    { rate: '$25,000 / TEU', tag: '⚓ Cước Chuẩn Hải Trình' },
    { rate: '$35,000 / TEU', tag: '🔥 Cước Cao — Cao Điểm Mùa Vụ' },
    { rate: '$50,000 / TEU', tag: '⚡ Cước Đỉnh Điểm — Khan Hiếm Tàu!' },
  ];

  document.addEventListener('click', (e) => {
    const rollBtn = e.target.closest('#btnRollDice, .btn-roll-tactical');
    if (rollBtn) {
      const diceCube = document.getElementById('dice3dCube');
      const diceRateVal = document.getElementById('diceRateValue');
      const diceRateTag = document.getElementById('diceRateTag');
      if (diceCube && diceRateVal && diceRateTag) {
        diceCube.classList.remove('rolling');
        void diceCube.offsetWidth; // trigger reflow
        diceCube.classList.add('rolling');

        let rollCount = 0;
        const interval = setInterval(() => {
          const randomItem = diceRates[Math.floor(Math.random() * diceRates.length)];
          diceRateVal.innerText = randomItem.rate;
          diceRateTag.innerText = randomItem.tag;
          rollCount++;
          if (rollCount > 7) {
            clearInterval(interval);
            const finalItem = diceRates[Math.floor(Math.random() * diceRates.length)];
            diceRateVal.innerText = finalItem.rate;
            diceRateTag.innerText = finalItem.tag;
          }
        }, 60);
      }
    }

    // 4. Interactive Incoterms Switcher Delegation
    const incotermBtn = e.target.closest('.incoterm-tab-btn');
    if (incotermBtn) {
      document.querySelectorAll('.incoterm-tab-btn').forEach(b => b.classList.remove('active'));
      incotermBtn.classList.add('active');
      const termKey = incotermBtn.getAttribute('data-incoterm');
      const data = incotermData[termKey];
      const incotermCardImg = document.getElementById('incotermCardImg');
      const incotermTitle = document.getElementById('incotermTitle');
      const incotermFreight = document.getElementById('incotermFreight');
      const incotermInsurance = document.getElementById('incotermInsurance');
      const incotermRisk = document.getElementById('incotermRisk');
      const incotermTip = document.getElementById('incotermTip');

      if (data && incotermCardImg && incotermTitle && incotermFreight && incotermInsurance && incotermRisk && incotermTip) {
        incotermCardImg.src = data.img;
        incotermTitle.innerText = data.title;
        incotermFreight.innerText = data.freight;
        incotermInsurance.innerText = data.insurance;
        incotermRisk.innerText = data.risk;
        incotermTip.innerHTML = data.tip;
      }
    }

    // 5. Interactive Event Simulator Delegation
    const eventBtn = e.target.closest('.event-tab-btn');
    if (eventBtn) {
      document.querySelectorAll('.event-tab-btn').forEach(b => b.classList.remove('active'));
      eventBtn.classList.add('active');
      const evtKey = eventBtn.getAttribute('data-event');
      const data = eventData[evtKey];
      const eventCardImg = document.getElementById('eventCardImg');
      const eventTitle = document.getElementById('eventTitle');
      const eventLossText = document.getElementById('eventLossText');
      const eventWinText = document.getElementById('eventWinText');

      if (data && eventCardImg && eventTitle && eventLossText && eventWinText) {
        eventCardImg.src = data.img;
        eventTitle.innerText = data.title;
        eventLossText.innerText = data.loss;
        eventWinText.innerText = data.win;
      }
    }
  });

  const incotermData = {
    fob: {
      img: 'assets/The Incoterm/FOB.png',
      title: 'FOB — GIAO DỌC MẠN TÀU (FREE ON BOARD)',
      freight: 'Người Mua tự trả cước biển',
      insurance: 'Không bắt buộc (Tự gánh rủi ro bão)',
      risk: 'Lan can tàu tại Cảng Xuất Khẩu',
      tip: '💡 <strong>Mẹo tác chiến:</strong> Tiết kiệm vốn ban đầu, thích hợp khi cước xúc xắc đang thấp!'
    },
    cif: {
      img: 'assets/The Incoterm/CIF.png',
      title: 'CIF — TIỀN HÀNG, BẢO HIỂM & CƯỚC (COST, INSURANCE, FREIGHT)',
      freight: 'Người Bán chịu toàn bộ cước biển',
      insurance: 'Bắt buộc người bán mua Bảo hiểm hàng hải',
      risk: 'Lan can tàu tại Cảng Đến (Bồi thường 100%)',
      tip: '💡 <strong>Mẹo tác chiến:</strong> Miễn nhiễm bão biển cấp 12, biến rủi ro của đối phương thành cơ hội!'
    },
    ddp: {
      img: 'assets/The Incoterm/DDP.png',
      title: 'DDP — GIAO ĐÃ NỘP THUẾ (DELIVERED DUTY PAID)',
      freight: 'Người Bán bao trọn mọi cước phí & thuế nhập khẩu',
      insurance: 'Bảo hiểm trọn gói tận kho đích',
      risk: 'Kho hàng người nhận (Điểm an toàn tuyệt đối)',
      tip: '💡 <strong>Mẹo tác chiến:</strong> Đem lại lợi nhuận uy tín +450,000 điểm khi cập bến thành công!'
    },
    exw: {
      img: 'assets/The Incoterm/EXW.png',
      title: 'EXW — GIAO TẠI XƯỞNG (EX WORKS)',
      freight: 'Người Mua chịu toàn bộ hành trình',
      insurance: 'Người Mua tự lo liệu',
      risk: 'Ngay tại cổng xưởng người bán',
      tip: '💡 <strong>Mẹo tác chiến:</strong> Chi phí vốn tối thiểu, xoay vòng tiền nhanh để mua thêm tàu Panamax!'
    }
  };

  const eventData = {
    storm: {
      img: 'assets/The Su Kien/BÃO NHIỆT ĐỚI.png',
      title: 'CƠ CHẾ TÁC ĐỘNG: BÃO CẤP 12',
      loss: 'Tàu bị bão đánh dạt, trừ ngay 2 Điểm Uy Tín mỗi container trên biển.',
      win: 'Bảo hiểm bồi thường 100% thiệt hại + Nhận thưởng danh tiếng +3 Uy Tín!'
    },
    pirate: {
      img: 'assets/The Su Kien/CƯỚP BIỂN.png',
      title: 'CƠ CHẾ TÁC ĐỘNG: CƯỚP BIỂN VỊNH ADEN',
      loss: 'Đội tàu không trang bị hộ tống bị cướp mất 1 container giá trị cao nhất.',
      win: 'Tàu có điều khoản CIP/CIF được hải quân quốc tế hộ tống qua eo biển an toàn!'
    },
    suez: {
      img: 'assets/The Su Kien/KÊNH ĐÀO TẮC.png',
      title: 'CƠ CHẾ TÁC ĐỘNG: TẮC NGHẼN KÊNH ĐÀO',
      loss: 'Tất cả tàu biển bị giữ lại 1 lượt chơi, phạt chậm giao hàng $15,000.',
      win: 'Thuyền trưởng nắm Thẻ Vận Tải Đa Phương Thức được chuyển hàng sang đường hàng không!'
    },
    customs: {
      img: 'assets/The Su Kien/HẢI QUAN GIỮ HÀNG.png',
      title: 'CƠ CHẾ TÁC ĐỘNG: HẢI QUAN KIỂM TRA ĐỘT XUẤT',
      loss: 'Container thiếu chứng từ hợp lệ bị giữ lại kiểm dịch 2 lượt.',
      win: 'Sở hữu Chứng Chỉ FIATA được thông quan luồng xanh ngay lập tức!'
    }
  };

  // 6. Fade up animations for other elements
  const otherFadeEls = gameplaySection.querySelectorAll('.fade-up-anim:not(.station-card-bright)');
  otherFadeEls.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
}

// Khởi chạy khi DOM sẵn sàng
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initNauticalScrollRail();
    initTacticalBoardgameBlock5();
    initAboutRedesignAnimations();
    initGameplayAnimations();
  });
} else {
  initNauticalScrollRail();
  initTacticalBoardgameBlock5();
  initAboutRedesignAnimations();
  initGameplayAnimations();
}



