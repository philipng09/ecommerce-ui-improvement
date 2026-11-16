# JavaScript Labs – Nguyễn Nhật Phi

## Thông tin sinh viên
- **Họ và tên:** Nguyễn Nhật Phi
- **MSSV:** 31241025042
- **Lớp học phần:** 26C1INF50902701
- **Học phần:** Phát triển ứng dụng TMĐT – TS. Nguyễn Mạnh Tuấn
- **GitHub:** https://github.com/philipng09

## Mục tiêu
Thực hành 03 bài Lab JavaScript (Lab 08, 09, 10) để xây dựng chức năng tương tác cho website: cú pháp và hàm, thao tác DOM và sự kiện, thư viện jQuery và GET Request. Các kỹ thuật này được liên hệ với website thương mại điện tử như kiểm tra biểu mẫu, giỏ hàng, lọc sản phẩm và hiệu ứng tương tác.

## Truy cập trên GitHub Pages
- Trang chủ: https://philipng09.github.io/ecommerce-ui-improvement/JavaScript-Labs/
- Lab 08: https://philipng09.github.io/ecommerce-ui-improvement/JavaScript-Labs/Lab08/
- Lab 09: https://philipng09.github.io/ecommerce-ui-improvement/JavaScript-Labs/Lab09/
- Lab 10: https://philipng09.github.io/ecommerce-ui-improvement/JavaScript-Labs/Lab10/

Mở trang chủ, chọn một Lab, sau đó bấm vào từng Exercise để xem kết quả. Nhấn **F12 → Console** để xem các thông báo console.log().

## Cấu trúc thư mục
```
JavaScript-Labs/
├── index.html          # Trang chủ portfolio
├── css/style.css       # Giao diện trang chủ và trang danh sách Lab
├── js/main.js          # Tương tác trang chủ: menu, tabs, bộ đếm
├── README.md
├── Lab08/              # index.html + các trang Exercise, css/, js/, images/, flags/
├── Lab09/              # index.html + các trang Exercise, css/, js/, images/
└── Lab10/              # index.html + các trang Exercise, css/, js/, images/, data/
```
Mỗi thư mục Lab giữ nguyên cấu trúc tệp mẫu của giảng viên (`labXX-walkthroughYY.html` và `js/labXX-walkthroughYY.js`). Mỗi Lab có `index.html` liệt kê tất cả Exercise.

## Nội dung từng Lab

### Lab 08 – JavaScript 1: Language Foundations

Cú pháp, biến, kiểu dữ liệu, hàm, String, Date, Array, Object và Browser Console.

| Exercise | Nội dung | File |
|---|---|---|
| 8.1 | Enabling/Disabling JavaScript – Bật, tắt JavaScript trên trình duyệt và kiểm tra thông báo hiển thị. | `Lab08/exercise8-1.html` |
| 8.2 | Embedded JavaScript – Nhúng mã JavaScript trực tiếp trong thẻ <script>, hiển thị hộp thoại alert(). | `Lab08/exercise8-2.html` |
| 8.3 | External JavaScript – Tách mã ra file hello.js, dùng document.write() và biến đếm count. | `Lab08/exercise8-3.html` |
| 8.4 | Using noscript – Thêm thông báo <noscript> cho người dùng tắt JavaScript. | `Lab08/exercise8-4.html` |
| 8.5 | Using the Browser Console – Chuyển file vào thư mục js/, đọc lỗi và dùng console.log(), warn(), error(). | `Lab08/exercise8-5.html` |
| 8.6 | Using Built-in JavaScript Objects – So sánh String object và literal (== và ===), dùng Date và Math. | `Lab08/lab08-walkthrough06.html` |
| 8.7 | Arrays – Dùng push(), unshift(), vòng lặp và điều kiện để tạo bảng lịch 30 ngày. | `Lab08/lab08-walkthrough07.html` |
| 8.8 | JavaScript Functions – Hàm có tham số, giá trị trả về, phạm vi biến cục bộ và toàn cục. | `Lab08/lab08-walkthrough08.html` |
| 8.9 | Functions as Objects – Hàm lồng nhau, hàm ẩn danh và truyền hàm làm tham số để tính thuế. | `Lab08/lab08-walkthrough09.html` |
| 8.10 | Creating JavaScript Objects – Tạo đối tượng đơn hàng bằng object literal và hàm khởi tạo. | `Lab08/lab08-walkthrough10.html` |
| 8.11 | Arrays of Objects – Duyệt mảng đối tượng quốc gia bằng for và for..in, hiển thị cờ. | `Lab08/lab08-walkthrough11.html` |

### Lab 09 – JavaScript 2: DOM and Events

Truy xuất, thay đổi phần tử HTML qua DOM, xử lý sự kiện, biểu mẫu và gỡ lỗi.

| Exercise | Nội dung | File |
|---|---|---|
| 9.1 | Basic DOM Selection – getElementById, getElementsByTagName/ClassName, querySelector(All), innerHTML, innerText. | `Lab09/lab09-walkthrough01.html` |
| 9.2 | DOM Family Relations – Duyệt cây DOM với firstChild, nextSibling, parentNode, childNodes, nodeType. | `Lab09/lab09-walkthrough02.html` |
| 9.3 | Modifying the DOM – Tạo phần tử bằng createElement, appendChild và xóa bằng removeChild. | `Lab09/lab09-walkthrough03.html` |
| 9.4 | Simple Event Handling – addEventListener cho click, mouseover, mouseout; ẩn/hiện nội dung có hiệu ứng. | `Lab09/lab09-walkthrough04.html` |
| 9.5 | Responding to Load Events – Chạy mã sau khi trang tải xong bằng sự kiện load. | `Lab09/lab09-walkthrough05.html` |
| 9.6 | Debugging Events – Đặt breakpoint trong DevTools, xem đối tượng sự kiện e và e.target. | `Lab09/lab09-walkthrough06.html` |
| 9.7 | Working with Forms – Đổi màu ô nhập khi focus và blur. | `Lab09/lab09-walkthrough07.html` |
| 9.8 | Form Validation – Kiểm tra ô trống khi submit, chặn gửi form và hiển thị lỗi. | `Lab09/lab09-walkthrough08.html` |

### Lab 10 – JavaScript 3: jQuery

Bộ chọn jQuery, sự kiện, thao tác DOM, hiệu ứng, hoạt ảnh và GET Request.

| Exercise | Nội dung | File |
|---|---|---|
| 10.1 | Set up jQuery – Tải jQuery từ CDN, có bản dự phòng trong thư mục js/. | `Lab10/lab10-walkthrough01.html` |
| 10.2 | Basic Selectors – val(), html(), attr(), css(), addClass() trên tập phần tử. | `Lab10/lab10-walkthrough01.html` |
| 10.3 | Advanced Selectors – :password, :nth-child(4n), :contains(). | `Lab10/lab10-walkthrough03.html` |
| 10.4 | jQuery Listeners – on(), off(), document ready và chuỗi sự kiện mousemove, mouseleave, click. | `Lab10/lab10-walkthrough04.html` |
| 10.5 | Inserting DOM Elements – after(), before(), append(), prepend(), appendTo(), insertBefore(). | `Lab10/lab10-walkthrough05.html` |
| 10.6 | Simple jQuery Animation – fadeIn/Out/Toggle và slideUp/Down/Toggle. | `Lab10/lab10-walkthrough06.html` |
| 10.7 | More jQuery Animation – Tạo khung xem ảnh lớn đi theo con trỏ chuột. | `Lab10/lab10-walkthrough07.html` |
| 10.8 | Complex Animations – animate() nhiều thuộc tính, chuỗi animation nối tiếp. | `Lab10/lab10-walkthrough08.html` |
| 10.9 | GET Requests – $.get() đọc dữ liệu JSON, hiển thị danh sách bằng $.each(). | `Lab10/lab10-walkthrough09.html` |
| 10.10 | jqXHR Handling – Xử lý done(), fail(), always() và biểu tượng đang tải. | `Lab10/lab10-walkthrough10.html` |

## Ghi chú kỹ thuật
- Các thư viện jQuery, Bootstrap, Font Awesome được tải qua **https** (code.jquery.com, cdn.jsdelivr.net) để chạy được trên GitHub Pages; jQuery có bản dự phòng `Lab10/js/jquery-3.1.1.min.js` (Exercise 10.1).
- Exercise 10.9–10.10: dịch vụ gốc `http://www.randyconnolly.com/funwebdev/services/travel/cities.php` dùng http nên bị trình duyệt chặn trên trang https. Bài dùng tệp `Lab10/data/cities.json` có cùng cấu trúc dữ liệu. Exercise 10.10 có thêm nút gọi URL lỗi để kiểm tra nhánh `fail()`.
- Exercise 10.2: dùng `#pageTitle` thay cho `#first` ở bước 3 để không ghi đè khối chứa textarea.
- Exercise 9.1: bước 13–14 (ẩn textarea, đổi màu nền) chạy sau 3 giây để kịp quan sát kết quả các bước trước.

## Sử dụng AI
Có sử dụng Claude để hỗ trợ đọc tài liệu, rà soát mã và gợi ý cách xử lý lỗi http/https. Toàn bộ mã đã được chạy thử và kiểm tra trên trình duyệt.
