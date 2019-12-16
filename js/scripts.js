function Order(type, size, crust, flavour) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.flavour = flavour;
}

Order.prototype.fullOrder = function () {
    return this.type + " with the crust of " + this.crust + " and " + this.flavour + " as flavour.";
};

function Total(price, quantity, delivery) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
}

Total.prototype.finalTotal = function () {
    return this.price * this.quantity + this.delivery;
};


var sizePrice = [1020, 800, 550]
var deliverPrices = [0, 300];

$(document).ready(function () {
    $('form#thisForm').submit(function (event) {
        event.preventDefault();
        var pizzaType = $('#type').val();

        var pizzaSize = parseInt($('#size').val());

        var pizzaCrust = $('#crust').val();

        var pizzaFlavour = $('#flavour').val();

        var pizzaQty = parseInt($('#qty').val());

        var pizzaPick = parseInt($('#pick').val());


        var price = sizePrice[pizzaSize - 1];


        var DeliveryCost = deliverPrices[pizzaPick - 1];



        newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaFlavour);
        newTotal = new Total(price, pizzaQty, DeliveryCost);
        if (pizzaPick===1){
        alert("Your oder is: " + newOrder.fullOrder() + ". see your total bill");
        alert("your bill is: " + newTotal.finalTotal() + " Thank you for contacting us");
        }else{
            if(pizzaPick===2){
                prompt("Enter location of pizza delivery");
                alert("Your order has been received and it will be delivered with transport cost of ksh 300.  see order details");
                alert("Your oder is: " + newOrder.fullOrder() + ". total amount is");
                alert("your cost is: " + newTotal.finalTotal() + " Thank you for contacting us, welcome again");
            }
        }

    });

 

});

