/* code goes here */
// Exercise 8.10 – Creating JavaScript objects

// Bước 1–6: các cách tạo đối tượng (giữ lại dạng object literal để tham khảo)
var order = {
    product: "Self Portrait in a Straw Hat",
    price: 15.0,
    quantity: 2,
    total: function() { return this.price * this.quantity; }
};
console.log("Object literal total = " + order.total());

// Bước 7–11: hàm khởi tạo (constructor function)
function Order(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.total = function() { return this.price * this.quantity; },

    this.output = function() {
        document.write("<p>Product=" + this.product);
        document.write("<br>Price=" + this.price);
        document.write("<br>Quantity=" + this.quantity);
        document.write("<br>Total=" + this.total());
    }
}

var example1 = new Order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new Order("Untitled #23", 10, 4);

example1.output();
example2.output();
