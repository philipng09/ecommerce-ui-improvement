/* code goes here */
// Exercise 9.2 – DOM family relations
// Bước 2–5 thực hiện trong Console:
//   document.getElementById("first")
//   document.getElementById("first").firstChild
//   document.getElementById("first").firstChild.nextSibling
//   document.getElementById("first").parentNode

var stories = document.getElementById("stories");
for (var i = 0; i < stories.childNodes.length; i++) {
    console.log("child " + i + " =" + stories.childNodes[i] +
                " nodeType=" + stories.childNodes[i].nodeType);

    // Bước 7: đổi màu nền các nút không phải văn bản (nodeType 1 = phần tử)
    if (stories.childNodes[i].nodeType == 1) {
        stories.childNodes[i].style.backgroundColor = "#FFE393";
    }
}
