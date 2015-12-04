/**
 * Created by POL on 2015-12-04.
 */
$(document).ready(function(){

    console.log("dziala calc");

    var nameInput = $("#nameInput");
    var priceInput = $("#priceInput");
    var amountInput = $("#amountInput");
    var addButton = $("#addButton");
    var total = $("#total");
    var itemList = $("#itemList");
    var totalPrice = 0;

    total.text(totalPrice);

    addButton.on("click", function(event) {
        var newItemName = nameInput.prop("value");
        var newItemPrice = parseFloat(priceInput.prop("value"));
        var newItemAmount = parseInt(amountInput.prop("value"));

        console.log(newItemName);
        console.log(newItemPrice);
        console.log(newItemAmount);

        if(newItemName.length === 0 || isNaN(newItemAmount) === true
            || isNaN(newItemPrice)=== true ||
        newItemAmount < 0 || newItemPrice<0) {
            console.log('zle dane');
            return;
        }
        else {
            console.log('ok');
            var newElement = $("<li>");
            var sum = newItemAmount * newItemPrice;

            newElement.html('Name: ' + newItemName + '<br>' + 'amount: ' + newItemAmount +
            '<br>' + "Price: "+ newItemPrice+'<br>'+
            'sum: '+ sum);

            itemList.append(newElement);
            total.text(sum);

            var deletButton = $('<br><button>Delete</button>');
            deletButton.on('click', function(event) {
               $(this).parent().remove();
                total.text(0);
            });
            deletButton.appendTo(newElement);


        }

        });



    //var tabLinks = $(".tab li");
    //
    //tabLinks.on('click',function(event){
    //    //var paragrafToShow = parseInt($(this).data("id"));
    // });

});