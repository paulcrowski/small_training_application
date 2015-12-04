/**
 * Created by POL on 2015-12-04.
 */

// naprostsza rzecz
//$(document).ready(function(){
//    console.log('dziala');
//    var acordeonHeadings = $(".acordeon h1");
//
//    acordeonHeadings.on("click", function(event){
//        var paragraf = $(this).next();
//        paragraf.toggle(1000);
//    });
//
//});

$(document).ready(function(){
        console.log('dziala');
        var acordeonHeadings = $(".acordeon h1");
        var currentVisibleElement = null;

        acordeonHeadings.on("click", function(event){
            if (currentVisibleElement != null && currentVisibleElement.get(0) !=
                $(this).next().get(0)) {
                currentVisibleElement.hide(1000);
            }

            currentVisibleElement = $(this).next();
            currentVisibleElement.show(1000);
        });

});