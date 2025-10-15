
import React, { useEffect } from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="about-page-content">
      <h1>Giới thiệu về CarePlus</h1>

      <section className="about-intro">
        <h2>Hệ thống Phòng khám quốc tế CarePlus</h2>
        <p>Hệ thống Phòng khám quốc tế CarePlus được điều hành bởi Công ty TNHH CityClinic Việt Nam. Những thông tin y khoa trên trang web chỉ dùng để tham khảo, bạn nên liên hệ bác sĩ để được tư vấn trước khi có bất cứ hành động nào.</p>
        <Link to="/contact" className="read-more-link-about">Liên hệ với chúng tôi &rarr;</Link>
      </section>

      <section className="about-section policy-section">
        <h2>Chính sách hoạt động</h2>
        <p>
          Chào mừng Bạn đến với Website Thương mại điện tử của Hệ thống phòng khám Quốc tế CarePlus thuộc Công ty TNHH CityClinic Việt Nam (gọi chung là "Website"). Vui lòng đọc kỹ Quy định Sử dụng trước khi tạo tài khoản hoặc tiếp tục truy cập website, để bạn biết được các quyền lợi và nghĩa vụ hợp pháp của mình liên quan đến Chúng tôi bao gồm nhưng không giới hạn các vấn đề về việc đặt hàng, mua hàng, thanh toán, tạo tài khoản, quản lý thông tin tài khoản, giải quyết sự cố,…. Khi Bạn truy cập vào website của Chúng tôi có nghĩa là Bạn đồng ý với Quy định Sử dụng này. Chúng tôi có quyền chỉnh sửa các quy định vào bất kỳ lúc nào mà không cần thông báo cho người dùng. Bạn cần phải định kỳ truy cập và đọc qua nội dung này để kịp thời cập nhật và nắm được các quy định của chúng tôi trước khi quyết định mua hàng.
        </p>
        <h3>Các định nghĩa:</h3>
        <p>
          Chúng tôi: theo ngữ cảnh có thể là Phòng khám Quốc tế CarePlus thuộc Công ty TNHH CityClinic Việt Nam và/hoặc các bên thứ hai khác có liên kết trên website trong việc hỗ trợ thanh toán.
        </p>
        <p>
          Dịch vụ: Dịch vụ chăm sóc sức khỏe triển khai trên Website bao gồm nhưng không giới hạn các gói khám sức khỏe và các dịch vụ liên quan.
        </p>
        <p>
          Bạn: theo ngữ cảnh có thể là người dùng, hoặc khách hàng, hoặc người được khách hàng ủy quyền bằng văn bản, lời nói hoặc một hình thức khác, để truy cập website.
        </p>
        <h3>1. ĐẶT MUA DỊCH VỤ CHĂM SÓC SỨC KHỎE</h3>
        <p>
          Bước 1: Bạn truy cập website và lựa chọn mục “Gói khám sức khỏe ” để lựa chọn Dịch vụ mong muốn hoặc sử dụng thanh “Tìm kiếm” để tìm kiếm Dịch vụ cần mua.
        </p>
        <p>
          Bước 2: Sau khi lựa chọn được Dịch vụ, Bạn bấm “Thêm vào giỏ hàng” để đến trang “Giỏ hàng” và tiến hành thanh toán. Tại trang “Giỏ hàng”, Bạn có thể bấm “Thanh toán” để đến trang “Thanh toán” hoặc bấm “Tiếp tục mua hàng” nếu muốn mua thêm Dịch vụ và lặp lại Bước 1.
        </p>
        <p>
          Bước 3: Ở trang “Thanh toán”, Bạn lần lượt nhập các thông tin cá nhân cần thiết (như họ tên, địa chỉ nhận hàng, số điện thoại liên hệ, email, ghi chú, v.v…). Trong trường hợp Bạn đã đăng ký Tài khoản, các thông tin mà Bạn đã cung cấp khi đăng ký Tài khoản sẽ được tự động hiển thị tại các mục cần nhập, Bạn có thể thực hiện sửa đổi thông tin nhận hàng nếu cần thiết.
        </p>
        <p>
          Bạn chọn hình thức thanh toán và tích chọn mục “Tôi đã đọc và đồng ý với Điều khoản và Điều kiện sử dụng Website Hệ thống Phòng khám CarePlus ” và bấm vào nút “ĐẶT MUA” để gửi đơn hàng và thanh toán. Vui lòng kiểm tra kỹ thông tin trước khi chọn nút “ĐẶT MUA””.
        </p>
        <p>
          Sau khi hoàn tất, Bạn sẽ được dẫn đến trang Xác nhận đơn hàng thể hiện việc đặt hàng đã được thực hiện thành công.
        </p>
        <h3>2. XÁC NHẬN ĐƠN HÀNG</h3>
        <p>
          Sau khi đặt hàng thành công, Bạn sẽ nhận được một email xác nhận đặt hàng thành công được gửi vào địa chỉ email mà Bạn đã cung cấp khi đặt hàng. Ngoài ra, nhân viên chăm sóc khách hàng của Chúng tôi có thể thực hiện một cuộc gọi để xác nhận thông tin đặt hàng theo số điện thoại mà Bạn đã cung cấp.
        </p>
        <h3>3. THỜI GIAN ĐẶT MUA DỊCH VỤ</h3>
        <p>
          Thời gian đặt mua Dịch vụ: trước ngày sử dụng Dịch vụ ít nhất 01 ngày.
        </p>
        <p>
          Nếu muốn sử dụng Dịch vụ vào ngày hôm sau, Bạn phải thực hiện việc đặt hàng và hoàn tất thanh toán trước 16h30 của ngày hôm nay.
        </p>
        <h3>4. GIÁ CẢ DỊCH VỤ</h3>
        <p>
          Giá cả Dịch vụ được niêm yết tại Website là giá bán cuối cùng đã bao gồm thuế Giá trị gia tăng (VAT) (nếu có). Giá cả của Dịch vụ có thể thay đổi tùy thời điểm và cơ cấu hạng mục của Dịch vụ do Chúng tôi quy định được công bố và liệt kê chi tiết trong mô tả của Dịch vụ. Phí vận chuyển hoặc Phí thực hiện đơn hàng sẽ được áp dụng thêm nếu có, và sẽ được hiển thị rõ tại trang Thanh toán khi Bạn tiến hành đặt hàng. Khi bạn thực hiện việc thanh toán, đồng nghĩa với việc Bạn đã tự nguyện đồng ý với giá Dịch vụ được công bố trên Website.
        </p>
        <h3>5. PHƯƠNG THỨC THANH TOÁN</h3>
        <p>
          Bạn có thể thanh toán các khoản tiền cho Chúng tôi thông qua:
        </p>
        <ul>
          <li>Thẻ ATM nội địa đã kích hoạt tính năng thanh toán trực tuyến</li>
          <li>Thẻ thanh toán quốc tế Visa/MasterCard...</li>
          <li>Ví điện tử</li>
          <li>Thanh toán trực tiếp tại phòng khám</li>
        </ul>
        <p>
          Nếu không có các loại thẻ trên/ hoặc bạn gặp vấn đề trong quá trình thanh toán vui lòng liên hệ tổng đài Miễn cước 1800 6116 để được hỗ trợ.
        </p>
        <h3>6. ĐẶT LỊCH HẸN SỬ DỤNG DỊCH VỤ VÀ ĐIỀU CHỈNH LỊCH HẸN</h3>
        <p>
          Sau khi đặt hàng thành công, nhân viên Chăm sóc khách hàng của Chúng tôi sẽ liên hệ với Bạn để xác nhận thông tin người sử dụng Dịch vụ, đặt lịch hẹn sử dụng Dịch vụ phù hợp với yêu cầu của Bạn và thông tin đến bạn lời khuyên trước khi sử dụng Dịch vụ:
        </p>
        <p>
          Bạn sẽ nhận thông tin xác nhận lịch hẹn bằng 1 trong 2 hình thức:
        </p>
        <ul>
          <li>Qua email: Nếu Bạn có cung cấp địa chỉ email trong hồ sơ tài khoản cá nhân, thông tin bệnh nhi sẽ được gửi ngay đến địa chỉ email của Bạn, Bạn có thể kiểm tra hộp thư đến hoặc Spam để nhận thông tin bệnh nhi.</li>
          <li>Tin nhắn SMS: Bạn cũng có thể yêu cầu nhận thông tin lịch hẹn và tình trạng thanh toán thành công Dịch vụ qua tín nhắn đến số điện thoại Bạn đã đăng ký trên tài khoản của mình.</li>
        </ul>
        <p>
          Nếu Bạn muốn điều chỉnh lịch hẹn, vui lòng liên hệ bộ phận Tổng đài 1800 6116/ Email:info@careplusvn.com hoặc fanpage CarePlus với điều kiện là:
        </p>
        <ul>
          <li>Lịch hẹn khám trên SMS/Email vẫn còn giá trị; và</li>
          <li>Điều chỉnh lịch hẹn trễ nhất trước 16h30 của ngày trước ngày sử dụng Dịch vụ</li>
        </ul>
        <h3>7. THỜI HẠN SỬ DỤNG DỊCH VỤ</h3>
        <p>Dịch vụ đặt mua thành công có giá trị sử dụng trong vòng 2 tuần kể từ ngày mua hoặc trong thời gian có áp dụng chương trình khuyến mãi (nếu có).</p>
        <h3>8. THAY ĐỔI THÔNG TIN DỊCH VỤ ĐÃ MUA</h3>
        <p>Sau khi đặt hàng thành công và nhân viên chăm sóc khách hàng của Chúng tôi đã hoàn tất việc gọi điện thoại xác nhận với Bạn, mọi thông tin người sử dụng Dịch vụ và thông tin đặt hàng sẽ không thể thay đổi.</p>
        <h3>9. HOÀN TIỀN</h3>
        <p>Điều kiện hoàn tiền:</p>
        <ul>
          <li>Chỉ áp dụng với Dịch vụ đã thanh toán thành công trên Website và không nằm trong chương trình khuyến mãi;</li>
          <li>Khách hàng chưa sử dụng dịch vụ.</li>
        </ul>
        <p>Quy định chung của việc hoàn tiền:</p>
        <ul>
          <li>Thủ tục hoàn tiền được thực hiện tại phòng khám CarePlus.</li>
          <li>Không có bất kỳ một khoản phí phát sinh nào được tính trong việc hoàn tiền.</li>
          <li>Hoàn tiền vào đúng số tài khoản và phương thức được dùng khi thanh toán. Đối với phương thức thẻ, thời gian Bạn nhận được tiền hoàn tùy theo quy định của ngân hàng phát hành thẻ của Bạn, thông thường:</li>
          <ul>
            <li>Thẻ khám bệnh: 1 - 5 ngày làm việc.</li>
            <li>Thẻ ATM nội địa/ Thẻ thanh toán quốc tế Visa/MasterCard: 10 - 15 ngày làm việc.</li>
          </ul>
          <li>Sau thời gian trên nếu chưa nhận được tiền hoàn, vui lòng liên hệ 18006116 Chúng tôi sẽ hỗ trợ Bạn.</li>
        </ul>
        <h3>10. XỬ LÝ KHIẾU NẠI</h3>
        <p>Khi Bạn thực hiện việc thanh toán, đồng nghĩa với việc bạn đã tự nguyện đồng ý với giá và nội dung Dịch vụ đã được công bố trên Website.</p>
        <p>Nếu có bất kỳ sự cố nào phát sinh, Bạn vui lòng liên hệ Bộ phận Chăm sóc Khách hàng của Chúng tôi thông qua Tổng đài miễn phí: 1800 6116 từ 8:00 đến 17:00 thứ Hai đến thứ Bảy.</p>
        <h3>11. QUY ĐỊNH KHÁC</h3>
        <p>Quy Định Sử Dụng Website Thương mại điện tử này là một phần không tách rời với Chính Sách Bảo Mật của chúng tôi. Xin vui lòng đọc thêm Chính Sách Bảo Mật để hiểu rõ các quy định, điều khoản, chính sách và hướng dẫn của chúng tôi trước khi bạn truy cập đăng ký và/hoặc sử dụng các Dịch Vụ trên website của chúng tôi.</p>
        <p>BẰNG VIỆC SỬ DỤNG DỊCH VỤ HAY TẠO TÀI KHOẢN TẠI WEBSITE, BẠN ĐÃ CHẤP NHẬN KHÔNG HỦY NGANG ĐỐI VỚI VÀ ĐỒNG Ý VỚI NHỮNG ĐIỀU KHOẢN DỊCH VỤ NÀY, BAO GỒM NHỮNG ĐIỀU KHOẢN, ĐIỀU KIỆN, VÀ CHÍNH SÁCH BỔ SUNG ĐƯỢC DẪN CHIẾU THEO ĐÂY VÀ/HOẶC CÓ LIÊN QUAN.</p>
      </section>

      <section className="about-section policy-section">
        <h2>Chính sách bảo mật</h2>
        <p>A. MỤC ĐÍCH VÀ PHẠM VI THU NHẬP</p>
        <p>
          Việc thu thập dữ liệu chủ yếu trên website bao gồm: họ và tên, email, số điện thoại, địa chỉ của khách hàng trong mục “Liên hệ”. Việc thu thập những thông tin kể trên là bắt buộc và cần thiết cho cả khách hàng lẫn nhân viên quản trị của Phòng khám CarePlus. Mục đích của công việc này nhằm tạo nên một nền tảng thông tin cơ bản của khách hàng, từ đây nhu cầu cần được tư vấn hay sử dụng dịch vụ chăm sóc sức khỏe của khách hàng được Phòng khám CarePlus đáp ứng dựa trên những thông tin thực, sẵn có. Thao tác thu thập dữ liệu cũng đẩy nhanh quá trình trao đổi giữa khách hàng (những người có nhu cầu sử dụng dịch vụ của Phòng khám CarePlus) và thành viên phụ trách, đây cũng chính là hành động nhằm bảo vệ quyền lợi của khách hàng.
        </p>
        <p>
          Khách hàng đăng ký sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới thông tin mà mình cung cấp và hộp thư điện tử của mình. Các biện pháp cần thiết sẽ được áp dụng để bảo vệ thông tin cá nhân thu thập được và thông tin cá nhân của khách hàng sẽ không được cung cấp cho bất cứ bên thứ ba nào. Bên cạnh đó, trong trường hợp phát hiện hành vi sử dụng trái phép hoặc vi phạm bảo mật của bên thứ ba, khách hàng có trách nhiệm thông báo kịp thời cho quản trị viên website của Phòng khám CarePlus để có biện pháp giải quyết phù hợp.
        </p>
        <p>B. PHẠM VI SỬ DỤNG THÔNG TIN</p>
        <p>Phòng khám CarePlus sử dụng thông tin khách hàng cung cấp để:</p>
        <ul>
          <li>Liên hệ xác nhận yêu cầu sử dụng dịch vụ cho khách hàng khi nhận được đăng ký khách hàng.</li>
          <li>Cung cấp thông tin dịch vụ đến khách hàng nếu có yêu cầu từ khách hàng.</li>
          <li>Gửi email tiếp thị, khuyến mãi về về các dịch vụ do Phòng khám CarePlus bán.</li>
          <li>Gửi các thông báo về các hoạt động trên website Phòng khám CarePlus: Careplusvn.com .</li>
          <li>Liên lạc và giải quyết với khách hàng trong những trường hợp đặc biệt.</li>
          <li>Khi có yêu cầu của cơ quan tư pháp bao gồm: Viện kiểm sát, Tòa án, cơ quan Công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của khách hàng.</li>
        </ul>
        <p>C. THỜI GIAN LƯU TRỮ THÔNG TIN</p>
        <p>Trong trường hợp thông thường, thông tin cá nhân của khách hàng sẽ được luôn bảo mật và lưu trữ trên hệ thống máy chủ của Phòng khám CarePlus. Khi có yêu cầu hủy bỏ bởi Ban quản trị, các thông tin sẽ được gỡ bỏ hoặc thay thế tùy yêu cầu.</p>
        <p>D. NHỮNG NGƯỜI HOẶC TỔ CHỨC CÓ THỂ ĐƯỢC TIẾP CẬN VỚI THÔNG TIN ĐÓ</p>
        <p>Đối tượng được tiếp cận với thông tin cá nhân của khách hàng thuộc một trong những trường hợp sau:</p>
        <ul>
          <li>Nhân viên của Phòng khám CarePlus.</li>
          <li>Các đối tác có ký hợp đồng thực hiện một phần dịch vụ của Phòng khám CarePlus. Các đối tác này sẽ nhận được những thông tin theo thỏa thuận hợp đồng (có thể một phần hoặc toàn bộ thông tin tuy theo điều khoản hợp đồng) để tiến hành hỗ trợ khách hàng – là những người dùng sử dụng dịch vụ do Phòng khám cung cấp.</li>
        </ul>
        <p>E. ĐỊA CHỈ CỦA ĐƠN VỊ THU THẬP VÀ QUẢN LÝ THÔNG TIN, BAO GỒM CÁCH THỨC LIÊN LẠC ĐỂ KHÁCH HÀNG CÓ THỂ HỎI VỀ HOẠT ĐỘNG THU THẬP, XỬ LÝ THÔNG TIN LIÊN QUAN ĐẾN CÁ NHÂN MÌNH.</p>
        <p>PHÒNG KHÁM QUỐC TẾ CAREPLUS</p>
        <p>Địa chỉ 1: 107 Tân Hải, P.13, Q. Tân Bình, TP.HCM</p>
        <p>Địa chỉ 2: Lầu 2, Crescent Plaza, 105 Tôn Dật Tiên, P. Tân Phú, Q.7, TP. HCM</p>
        <p>Điện thoại: 028 7300 3223 - Hotline: 1800 6116</p>
        <p>E-mail: info@careplusvn.com</p>
        <p>Website: www.careplusvn.com</p>
        <p>F. PHƯƠNG THỨC VÀ CÔNG CỤ ĐỂ KHÁCH HÀNG TIẾP CẬN VÀ CHỈNH SỬA DỮ LIỆU CÁ NHÂN CỦA MÌNH TRÊN HỆ THỐNG THƯƠNG MẠI ĐIỆN TỬ CỦA ĐƠN VỊ THU NHẬP THÔNG TIN.</p>
        <p>Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách liên hệ với Ban quản trị website Phòng khám CarePlus thực hiện việc này.</p>
        <p>G. CƠ CHẾ TIẾP NHẬN VÀ GIẢI QUYẾT KHIẾU NẠI CỦA KHÁCH HÀNG LIÊN QUAN ĐẾN VIỆC THÔNG TIN CÁ NHÂN BỊ SỬ DỤNG SAI MỤC ĐÍCH HOẶC PHẠM VI ĐÃ THÔNG BÁO.</p>
        <p>Thông tin cá nhân của khách hàng được cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân. Việc thu thập và sử dụng thông tin của mỗi khách hàng chỉ được thực hiện khi có sự đồng ý của người đó đó trừ những trường hợp pháp luật có quy định khác.</p>
        <p>Trong trường hợp có khiếu nại về nội dung bảo mật thông tin, đề nghị khách hàng liên hệ Ban quản trị của website Phòng khám CarePlus. Khi tiếp nhận những phản hồi này, Ban quản trị và nhân viên phụ trách của CarePlus sẽ xác nhận lại thông tin. Trong trường hợp đúng như phản ánh của khách hàng thì tùy theo mức độ, Ban điều hành Phòng khám CarePlus sẽ có những biện pháp xử lý kịp thời.</p>
        <p>Phòng khám CarePlus yêu cầu các cá nhân khi đăng ký/mua hàng phải cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa chỉ liên lạc, e-mail, số điện thoại,… và chịu trách nhiệm về tính pháp lý của những thông tin trên. Phòng khám CarePlus không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của khách hàng nếu xét thấy tất cả thông tin cá nhân của khách hàng đó cung cấp khi đăng ký ban đầu là không chính xác.</p>
        <p>H. CHÚNG TÔI XIN CAM KẾT</p>
        <p>Mọi thông tin cá nhân của khách hàng thu thập được từ website Careplusvn.com sẽ được lưu giữ an toàn; khách hàng hoàn toàn có thể sử dụng và chủ động truy cập vào tài khoản cá nhân của mình bằng tên đăng nhập và mật khẩu do khách hàng chọn.</p>
        <p>Phòng khám CarePlus bằng nỗ lực tốt nhất của mình, sẽ áp dụng các giải pháp công nghệ để ngăn chặn các hành vi đánh cắp hoặc tiếp cận thông tin trái phép; sử dụng, thay đổi hoặc phá hủy thông tin trái phép.</p>
        <p>Trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân, gây ảnh hưởng xấu đến khách hàng, Phòng khám CarePlus sẽ ngay lập tức thông báo cho khách hàng và trình vụ việc cho cơ quan chức năng điều tra xử lý.</p>
        <p>Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của thành viên bao gồm thông tin hóa đơn kế toán chứng từ số hóa.</p>
        <p>Khách hàng có nghĩa vụ bảo mật tên đăng ký, mật khẩu và hộp thư điện tử của mình. Phòng khám CarePlus sẽ không chịu trách nhiệm dưới bất kỳ hình thức nào đối với các thiệt hại, tổn thất (nếu có) do khách hàng không tuân thủ quy định bảo mật này.</p>
        <p>Khách hàng tuyệt đối không được có các hành vi sử dụng công cụ, chương trình để can thiệp trái phép vào hệ thống hay làm thay đổi dữ liệu của Phòng khám CarePlus. Trong trường hợp Phòng khám CarePlus phát hiện khách hàng có hành vi cố tình giả mạo, gian lận, phát tán thông tin cá nhân trái phép… Phòng khám CarePlus có quyền chuyển thông tin cá nhân của khách hàng cho các cơ quan có thẩm quyền để xử lý theo quy định của pháp luật.</p>
      </section>
    </div>
  );
}

export default AboutPage;