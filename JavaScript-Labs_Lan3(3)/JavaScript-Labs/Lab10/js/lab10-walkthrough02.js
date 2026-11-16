/* try the different selection calls here */
// Exercise 10.2 – Basic selectors
console.log("jQuery version: " + $.fn.jquery);   // xác nhận jQuery đã được tải (Exercise 10.1)

var msg = $('#msgArea');
msg.val("here is some new text");

// Bước 3: html() đọc/ghi nội dung HTML.
// Dùng #pageTitle thay vì #first để không ghi đè cả khối chứa textarea.
$('#pageTitle').html("new Title");

// Bước 4: attr() đọc thuộc tính
$('#msgArea').val("My class is " + $('#msgArea').attr("class"));

// Bước 5: đổi màu nền tất cả button, không cần vòng lặp
var buttons = $('button');
buttons.css('background-color', 'red');

// Bước 6
var temp = $('body');
temp.css("background-color", "ivory");

// Bước 7: thêm class bằng cách gọi trực tiếp trên tập phần tử
$('.center-icons').addClass('selected');
