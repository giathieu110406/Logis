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
const tabButtons = document.querySelectorAll('.tab-btn');

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
      
      if (targetView === 'buy') {
        switchView('home');
        setTimeout(() => {
          const buySection = document.getElementById('buy');
          if (buySection) {
            buySection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        switchView(targetView);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Tab Filtering (Cards page)
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-tab');
      renderCards();
    });
  });

  // Gameplay Page Tab Navigation (.gp-tab)
  document.querySelectorAll('.gp-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.gp-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Search input filtering
  cardSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderCards();
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
    window.scrollTo(0, savedScrollY);
    if (onCompleteCallback) onCompleteCallback();
  };

  if (typeof gsap !== 'undefined') {
    gsap.killTweensOf(mobileNav);
    gsap.to(mobileNav, {
      xPercent: -100,
      opacity: 0,
      duration: 0.4,
      ease: 'power3.inOut',
      onComplete: restoreBodyScroll
    });
  } else {
    restoreBodyScroll();
  }
}

// GSAP 3D & SCROLLANIMATIONS ENGINE (SLOWER & EXTRA SMOOTH)
function initGSAPAnimations() {
  if (typeof gsap === 'undefined') return;

  // Register ScrollTrigger plugin if available
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 1. Hero Title & Subtitle Entrance (Slower & Elegant)
  gsap.from('.home-banner-title', {
    y: 60,
    opacity: 0,
    duration: 1.8,
    ease: 'power3.out',
    delay: 0.3
  });

  gsap.from('.home-banner-sub', {
    y: 40,
    opacity: 0,
    duration: 1.6,
    ease: 'power3.out',
    delay: 0.7
  });

  // 2. Hero Scroll Curtain & Product Zoom Reveal Animation Timeline
  const heroSection = document.getElementById('hero');
  const heroCurtain = document.getElementById('heroCurtain');
  const heroProductReveal = document.getElementById('heroProductReveal');
  const heroProductCaption = document.getElementById('heroProductCaption');
  const firstContentSec = document.querySelector('.home-quychien-section');

  if (heroSection && heroCurtain && typeof ScrollTrigger !== 'undefined') {
    // Pin hero section during curtain animation & product reveal transition
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: '+=250%', // Scroll distance for card stretch -> card expand -> product zoom -> text reveal -> content reveal
        pin: true,
        scrub: 1, // Smooth scrub sync with wheel scroll
        anticipatePin: 1
      }
    });

    // Stage 1: Stretch vertical rectangular card image in center from 0% height to 100% height
    heroTl.to(heroCurtain, {
      height: '100%',
      duration: 1,
      ease: 'power2.inOut'
    });

    // Stage 2: Expand card image horizontally to cover whole screen (width from 4px to 100%)
    heroTl.to(heroCurtain, {
      width: '100%',
      duration: 1,
      ease: 'power2.inOut'
    });

    // Stage 3: Zoom product image from center, leaving margins on 4 edges (scale 0.1 -> 1)
    if (heroProductReveal) {
      heroTl.to(heroProductReveal, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out'
      }, '-=0.5'); // Overlap slightly with horizontal expansion
    }

    // Stage 3.5: Reveal white title "Nhập cuộc ngay hôm nay" over zoomed product image
    if (heroProductCaption) {
      heroTl.fromTo(heroProductCaption, 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.4'
      );
    }

    // Stage 4: After product image & caption reveal, smoothly fade in & slide up game introduction section
    if (firstContentSec) {
      heroTl.from(firstContentSec, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power2.out'
      });
    }
  }

  // 3. GSAP ScrollTrigger Animations for Home Sections (Slowed down for high visibility)
  const sections = document.querySelectorAll('.home-quychien-section');
  sections.forEach((sec, idx) => {
    // Skip first section if handled by hero timeline reveal
    if (idx === 0 && heroSection && heroCurtain) return;

    const textCol = sec.querySelector('.home-quychien-text-col');
    const imgFrame = sec.querySelector('.quychien-img-frame');

    if (textCol && typeof ScrollTrigger !== 'undefined') {
      gsap.from(textCol, {
        scrollTrigger: {
          trigger: sec,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1.2, // Smooth scrub tracking with scroll
        },
        y: 80,
        opacity: 0,
        ease: 'power2.out'
      });
    }

    if (imgFrame && typeof ScrollTrigger !== 'undefined') {
      gsap.from(imgFrame, {
        scrollTrigger: {
          trigger: sec,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1.2,
        },
        scale: 0.88,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
      });
    }
  });

  // 3. GSAP 3D Tilt Effect on Pillar Cards
  const tiltElements = document.querySelectorAll('.home-pillar-card');
  tiltElements.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -14; // Max 14 deg
      const rotateY = ((x - centerX) / centerX) * 14;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        duration: 0.4,
        ease: 'power1.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8, // Smooth return
        ease: 'power2.out'
      });
    });
  });

  // 4. Intro Section Automatic Slideshow (Rotates every 4s: 1 -> 2 -> 3)
  initIntroSlideshow();
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

    // Use GSAP 3D animation if GSAP is available
    if (typeof gsap !== 'undefined') {
      // Outgoing slide GSAP 3D animation (Rotate Y + Scale down + Fade out)
      gsap.to(currentSlide, {
        rotationY: exitRotateY,
        scale: 0.88,
        opacity: 0,
        z: -100,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          currentSlide.classList.remove('active');
          gsap.set(currentSlide, { visibility: 'hidden', rotationY: 0, scale: 1, z: 0 });
        }
      });

      // Incoming slide GSAP 3D animation (Rotate Y from angle + Scale up + Fade in)
      gsap.set(nextSlide, {
        visibility: 'visible',
        opacity: 0,
        rotationY: enterRotateY,
        scale: 0.88,
        z: -100
      });
      nextSlide.classList.add('active');

      gsap.to(nextSlide, {
        rotationY: 0,
        scale: 1,
        opacity: 1,
        z: 0,
        duration: 0.8,
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
  
  // Show target view
  const targetViewEl = document.getElementById(`${viewName}View`);
  if (targetViewEl) {
    targetViewEl.classList.add('active');
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

// RENDER CARDS GRID
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
    cardEl.className = 'card-item';
    cardEl.innerHTML = `
      <div class="card-img-container">
        <img src="${card.image}" alt="${card.title}" class="card-img" loading="lazy">
      </div>
      <div class="card-info">
        <span class="card-type">${card.categoryText}</span>
        <h3 class="card-title">${card.title}</h3>
        <p class="card-desc">${card.effect}</p>
      </div>
    `;
    
    // Add click event to open details modal
    cardEl.addEventListener('click', () => openCardModal(card));
    
    cardsGrid.appendChild(cardEl);
  });
}

// MODAL INTERACTIONS
function openCardModal(card) {
  modalCardImg.src = card.image;
  modalCardImg.alt = card.title;
  modalCardType.textContent = card.categoryText;
  
  // Adjust badge color according to category
  modalCardType.className = 'modal-card-type';
  modalCardType.classList.add(`type-${card.category}`);
  
  modalCardTitle.textContent = card.title;
  modalCardEffect.innerHTML = `<strong>Hiệu ứng:</strong> ${card.effect}`;
  modalCardStrategy.textContent = card.strategy;
  
  cardModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock background scrolling
}

function closeCardModal() {
  cardModal.classList.remove('active');
  // Only restore overflow scroll if mobile menu is not active
  if (!mobileNav.classList.contains('active')) {
    document.body.style.overflow = 'auto';
  }
}
