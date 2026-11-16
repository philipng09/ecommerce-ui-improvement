/* code goes here */
// Exercise 9.3 – Modifying the DOM
var first = document.getElementById("first");

var text = document.createTextNode("this is programmatically created");
var p = document.createElement("p");

p.appendChild(text);
first.appendChild(p);

// xóa một phần tử <li> khỏi danh sách
var icons = document.getElementById("iconList");
icons.removeChild( document.getElementById("deleteThisOne") );
