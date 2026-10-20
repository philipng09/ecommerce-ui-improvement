# E-commerce UI Improvement

## 1. Giới thiệu
Trang tĩnh HTML5/CSS3 thiết kế lại **thẻ sản phẩm** ở trang danh mục, tập trung vào cách hiển thị giá gốc, giá khuyến mãi và mức giảm. Mục tiêu: trong 3 giây nhìn một thẻ, người mua biết giá phải trả, giá gốc và số tiền tiết kiệm.

## 2. Website tham khảo
- Tên website: Shopee Việt Nam
- URL: https://shopee.vn
- Khu vực đã khảo sát: Trang chủ, Danh mục sản phẩm, Chi tiết sản phẩm, Tìm kiếm, Giỏ hàng

## 3. Chức năng
- Hiển thị danh sách 6 sản phẩm mẫu (5 có giảm giá, 1 không giảm).
- Mỗi thẻ có ảnh, tên, giá cuối, giá gốc gạch ngang, số tiền tiết kiệm, nhãn phần trăm, đánh giá, số đã bán và nút "Thêm vào giỏ".
- Bố cục 2 cột trên điện thoại, 3 cột từ 768px trở lên (nội dung tối đa 1200px).

## 4. Công nghệ
- HTML5 (semantic: header, main, section, article, data, del)
- CSS3 (CSS Grid, Flexbox, biến CSS, media query)
- Font Be Vietnam Pro (Google Fonts), có font hệ thống dự phòng
- Không dùng JavaScript, framework, backend hay cơ sở dữ liệu

## 5. Cách chạy
Mở file `index.html` bằng trình duyệt, hoặc truy cập bản triển khai trên GitHub Pages.

## 6. Cải tiến đã thực hiện
**Vấn đề ban đầu:** trên thẻ sản phẩm của sàn tham khảo, nhiều nhãn khuyến mãi cùng xuất hiện trong vùng nhỏ, khiến người mua phải tự tính mức tiết kiệm.

**Thay đổi:**
- Giá cuối là chữ to và đậm nhất trong cụm giá; giá gốc nhỏ, màu xám, gạch ngang, đặt ngay bên dưới.
- Hiển thị cả phần trăm giảm (nhãn trên ảnh) và số tiền tiết kiệm (nhãn xanh), theo khuyến nghị của Baymard Institute.
- Mọi thông tin ưu đãi gom vào một cụm giá duy nhất.
- Thẻ không giảm giá dùng màu chữ thường, không dùng màu đỏ khuyến mãi.
- Tên sản phẩm giới hạn 2 dòng để hàng giá thẳng hàng giữa các thẻ.
- Trên máy tính giữ 3 cột thay vì 4 cột để 6 sản phẩm chia đều 2 hàng.
- Nút cao 44px, có viền focus khi dùng bàn phím; chữ ẩn "Giá gốc", "Giá bán" cho trình đọc màn hình.

## 7. Hỗ trợ từ AI
Công cụ AI hỗ trợ đề xuất bảng khảo sát, phương án thiết kế và mã nguồn ban đầu. Tôi đã kiểm tra lại trên Shopee, chạy thử ở nhiều kích thước màn hình và tự chỉnh sửa. Chi tiết trong [AI_USAGE.md](AI_USAGE.md).
