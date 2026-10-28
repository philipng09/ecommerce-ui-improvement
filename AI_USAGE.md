# AI Usage Log

## 1. Công cụ AI
Tên công cụ: [Tên công cụ AI]

## 2. Mục đích sử dụng
- Lập khung bảng phân tích 5 khu vực giao diện của Shopee.
- Đề xuất phương án thiết kế thẻ sản phẩm (bố cục, thẻ HTML semantic, tổ chức CSS, tiêu chí kiểm tra).
- Hỗ trợ tạo mã HTML/CSS ban đầu và giải thích các thành phần.
- Tìm tài liệu tham khảo (Baymard Institute, WCAG 2.2, số liệu thị trường của Metric).

## 3. Prompt đã sử dụng
**Prompt 1 – Phân tích website:** đóng vai chuyên gia phân tích hệ thống và front-end TMĐT, lập bảng 5 khu vực (Trang chủ, Danh mục, Chi tiết sản phẩm, Tìm kiếm, Giỏ hàng) của Shopee; mỗi khu vực gồm mục đích, thành phần UI, điểm thuận tiện, 1 vấn đề, 1 đề xuất; phân biệt quan sát và đề xuất, không khẳng định tính năng chưa kiểm chứng.

**Prompt 2 – Đề xuất giao diện:** cải tiến thẻ sản phẩm và cách hiển thị giá gốc, giá khuyến mãi, tỷ lệ giảm cho khách hàng Việt Nam; đề xuất bố cục desktop/mobile, thẻ HTML5 semantic, tổ chức CSS, tiêu chí khả dụng; giải thích phương án trước, chưa tạo mã.

**Prompt 3 – Tạo mã nguồn:** tạo trang HTML5/CSS3 có tiêu đề, tối thiểu 4 sản phẩm (ảnh, tên, giá bán, giá khuyến mãi, nút), dùng Flexbox/Grid, CSS tách file `css/style.css`, không backend, không thư viện không cần thiết; giải thích cách chạy và các điểm cần kiểm tra.

## 4. Kết quả AI đề xuất
- Bảng phân tích 5 khu vực kèm vấn đề tiềm ẩn và đề xuất có trích dẫn.
- Phương án thẻ: thứ bậc ảnh → tên → cụm giá → đánh giá → nút; lưới responsive; bảng màu đạt tương phản WCAG.
- Mã nguồn ban đầu: `index.html` (6 thẻ), `css/style.css` (6 phần), 6 ảnh minh hoạ SVG.

## 5. Kiểm tra và điều chỉnh
**Đối chiếu với Shopee:** 2/5 nhận xét phù hợp hoàn toàn (Flash Sale có đếm ngược; thẻ sản phẩm nhiều nhãn). 3/5 nhận xét được điều chỉnh cách diễn đạt vì phụ thuộc sản phẩm, trạng thái đăng nhập hoặc bước thanh toán (giá dạng khoảng, yêu cầu đăng nhập khi tìm kiếm, thời điểm hiển thị phí vận chuyển).

**Nhận xét tự bổ sung:** đánh giá sao và số đã bán đặt sát nhãn khuyến mãi làm tăng mật độ thông tin quanh giá; giá trên thẻ chưa gồm voucher và phí vận chuyển nhưng không có chú thích → bổ sung dòng chú thích ở đầu trang.

**Điều chỉnh trong mã:**
- Ở 360px, nhãn "Tiết kiệm … (30%)" bị xuống 2 dòng → bỏ phần trăm khỏi nhãn xanh, giữ ở nhãn trên ảnh kèm chữ ẩn "Giảm 30%".
- Ở 1280px, lưới 4 cột với 6 sản phẩm để lại hàng cuối 2 thẻ → đổi `repeat(4, minmax(0, 1fr))` thành `repeat(3, minmax(0, 1fr))` trong media query `min-width: 1024px`.

**Không sử dụng:** lưới 4 cột trên máy tính; ảnh sản phẩm từ website tham khảo (vi phạm bản quyền).

## 6. Phần tôi hiểu và có thể giải thích
- `grid-template-columns: repeat(2, minmax(0, 1fr))` và media query đổi sang 3 cột.
- Thẻ dùng `display: flex; flex-direction: column`, nút dùng `margin-top: auto` để luôn nằm ở đáy thẻ.
- `-webkit-line-clamp: 2` kết hợp `min-height` giữ hàng giá thẳng hàng.
- `<del>` kèm chữ ẩn `.visually-hidden` "Giá gốc:" cho trình đọc màn hình.
- `<data value="129000">` lưu giá trị số máy đọc được.
- Biến CSS trên `:root` và cách thay đổi giá trị trong media query.
- Tiêu chí WCAG 2.2: tương phản 4,5:1 (1.4.3) và vùng bấm tối thiểu 24×24px (2.5.8).

---

# Buổi 2 – HTML5 & CSS3

## Công cụ
Claude

## Prompt đã dùng
- **Prompt 1 – Phân tích mã nguồn hiện tại:** dán index.html và style.css, yêu cầu xác định thành phần HTML đã có, còn thiếu, 3 vấn đề, đề xuất cải thiện và thứ tự thực hiện; chưa viết lại toàn bộ mã.
- **Prompt 2 – Kiểm tra cấu trúc HTML5:** kiểm tra header/main/section/article/footer, thứ bậc h1–h3, img/alt, nút; phân biệt lỗi cần sửa và đề xuất.
- **Prompt 5 – Thực hành Flexbox:** HTML khu vực nút của thẻ, yêu cầu display: flex, justify-content, align-items, gap.
- **Prompt 7 – Hiệu ứng CSS:** hover nhẹ, transition, focus-visible, không làm xê dịch bố cục.
- **Prompt 8 – Kiểm tra lỗi:** mô tả lỗi chữ "Thêm vào giỏ" xuống 2 dòng ở 390px; phân biệt nguyên nhân đã xác định và giả thuyết.

## Kiểm tra và tự điều chỉnh
- **Áp dụng:** sửa aria-label của nút (WCAG 2.5.3); tên 3 dòng và min-height 44px cho dòng giá phụ trên điện thoại; hàng nút Flexbox; transition và focus.
- **Điều chỉnh:** đề xuất thêm nút Yêu thích với `flex: 1` cho nút chính làm chữ "Thêm vào giỏ" xuống 2 dòng ở 390px → thêm media query giảm padding ngang còn 4px, cỡ chữ 13px, `white-space: nowrap`; kiểm tra lại ở 390, 360, 320px.
- **Không áp dụng:** thêm thanh `nav` – trang chỉ có một trang, menu sẽ là liên kết không có trang đích.
- **Tự sửa độc lập:** cập nhật nội dung chân trang từ "Chương 1" sang "Buổi 2".
