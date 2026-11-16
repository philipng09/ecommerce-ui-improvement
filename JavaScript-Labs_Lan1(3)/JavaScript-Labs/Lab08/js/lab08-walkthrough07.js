
/* add code here */
// Exercise 8.7 – Arrays

var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
// document.write(daysOfWeek + "<br>");

daysOfWeek.push("Sat");        // thêm vào cuối mảng
// document.write(daysOfWeek + "<br/>");

daysOfWeek.unshift("Sun");     // thêm vào đầu mảng
// document.write(daysOfWeek + "<br/>");

document.write("<table border=1>");

// Hàng tiêu đề: tên các ngày, tên dài hơn 3 ký tự được in nghiêng
document.write("<tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
    var day;
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

// Bước 8: các ngày 1–30, tháng bắt đầu vào Chủ nhật
var dayNumber = 1;
while (dayNumber <= 30) {
    document.write("<tr>");
    for (var col = 0; col < daysOfWeek.length; col++) {
        if (dayNumber <= 30) {
            document.write("<td>" + dayNumber + "</td>");
            dayNumber++;
        } else {
            document.write("<td></td>");
        }
    }
    document.write("</tr>");
}

document.write("</table>");
