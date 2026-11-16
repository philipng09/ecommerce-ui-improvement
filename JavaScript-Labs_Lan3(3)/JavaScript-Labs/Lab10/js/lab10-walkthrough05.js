/* put your DOM code here */
// Exercise 10.5 – Inserting DOM elements
$(function () {
    // create a new DOM element
    var img = $('<img src="images/art/thumbs/13030.jpg" >');
    var panel = $('.panel');

    // Các cách chèn đã thử lần lượt theo bước 2–8:
    // panel.after(img);
    // panel.before(img);
    // panel.append(img);
    // panel.prepend(img);
    // img.appendTo(panel);
    // img.prependTo(panel);

    // Bước 8 (phiên bản cuối)
    img.insertBefore(panel);
});
