// Exercise 10.9 – GET requests
// Dịch vụ gốc trong tài liệu dùng http:// nên bị trình duyệt chặn khi chạy trên
// GitHub Pages (https). Vì vậy bài dùng file JSON cùng cấu trúc đặt trong thư mục data/.
// URL gốc: http://www.randyconnolly.com/funwebdev/services/travel/cities.php
$(function() {
    $("#consume").click(function() {
        var url = "data/cities.json";
        $("#results").html("<ul></ul>");
        $.get(url, function (data, status) {
            if (status == "success") {
                // dùng $.each() thay cho vòng lặp for (bước 5)
                $.each(data, function(index, value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            }
        });
    });
});
