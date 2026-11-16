
// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* your code goes here */
// Exercise 9.5 – Responding to load events
// Bước 2–3: gọi getElementById ngay lập tức sẽ lỗi vì DOM chưa tải xong.
// Bước 4: chuyển code vào sự kiện load của window.
window.addEventListener("load", function(){
    var divToGet = document.getElementById("div1");
    alert(divToGet.innerHTML);
});