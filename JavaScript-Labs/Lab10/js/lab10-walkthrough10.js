// Exercise 10.10 – jqXHR handling: done() / fail() / always()
// URL gốc: http://www.randyconnolly.com/funwebdev/services/travel/cities.php
$(function() {
    $('.animLoading').hide();

    function loadCities(url) {
        $("div#results ul").empty();
        $('.animLoading').show();
        $.get(url)
            // done will happen first
            .done(function(data) {
                $.each(data, function(index, value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            })
            // if error occurs will execute, but before always()
            .fail(function(xhr, status, error) {
                alert("failed loading data - status=" + status +
                      " error=" + error);
            })
            // always should be last
            .always(function(data) {
                $('.animLoading').fadeOut("slow");
            });
    }

    $("#consume").click(function() {
        loadCities("data/cities.json");
    });

    // Nút bổ sung để kiểm tra nhánh fail(): gọi tới một file không tồn tại
    $("#consumeError").click(function() {
        loadCities("data/khong-ton-tai.json");
    });
});
