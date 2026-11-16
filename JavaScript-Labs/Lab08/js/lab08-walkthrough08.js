// define functions in this file
// Exercise 8.8 – JavaScript functions

// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   // Bước 10: bỏ "var" để thấy biến box trở thành biến toàn cục
   // (bước 9 dùng "var box" thì console.log(box) báo lỗi box is not defined)
   box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}
