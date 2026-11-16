/* code goes here */
// Exercise 9.1 – Basic DOM selection

// Bước 2: chọn textarea theo id và đặt giá trị
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

// Bước 3–4: thay nội dung tiêu đề
var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";
document.getElementById("pageTitle").innerHTML = "Even newer title";

// Bước 5–6: innerHTML (có thẻ) và innerText (chỉ chữ)
msg.value = document.getElementById("first").innerHTML;
msg.value = document.getElementById("first").innerText;

// Bước 7: đọc thuộc tính class
msg.value = "My class is " + msg.getAttribute("class");

// Bước 8: chọn theo tên thẻ
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

// Bước 9: lấy nội dung tất cả thẻ <span>
elem = document.getElementsByTagName("span");
for (var i = 0; i < elem.length; i++) {
    document.getElementById("msgArea").value += "\n" + elem[i].innerText;
}

// Bước 10: chọn theo tên class
document.getElementById("msgArea").value = "";
var counts = document.getElementsByClassName("count-number");
for (i = 0; i < counts.length; i++) {
    document.getElementById("msgArea").value += "\n" + counts[i].innerText;
}

// Bước 11–12: querySelector và querySelectorAll với bộ chọn CSS
var ps = document.querySelector("#first p");
document.getElementById("msgArea").value = ps.innerHTML;
ps = document.querySelectorAll("#first p");
for (i = 0; i < ps.length; i++) {
    document.getElementById("msgArea").value += ps[i].innerHTML + "\n";
}

// Bước 13–14: ẩn textarea và đổi màu nền khối features.
// Đợi 3 giây để kịp quan sát kết quả các bước trên trước khi textarea bị ẩn.
setTimeout(function () {
    document.getElementById("msgArea").setAttribute("class", "hidden");
    document.getElementById("features").style.backgroundColor = "green";
}, 3000);
