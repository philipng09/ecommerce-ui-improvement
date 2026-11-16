/* code goes here */
// Exercise 8.9 – Functions as objects (phiên bản cuối, bước 6)
var isCanadian = true;

// tax là một hàm được truyền vào như một tham số
function calculateTax(amount, tax) {
    return amount * tax();
}

function calculateTotal(price, quantity) {
    var amount = price * quantity;
    return amount + calculateTax(amount, function () {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    });
}
