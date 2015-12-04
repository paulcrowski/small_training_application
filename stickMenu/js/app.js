/**
 * Created by POL on 2015-12-04.
 */
$(document).ready(function(){
    console.log('dziala');
    var menu = $(".menu");
    var menuOffsetFromTop = menu.position().top;

    $(window).on("scroll", function(event){
        console.log($(window).scrollTop());
        console.log(menu.position());
        if($(window).scrollTop()> menuOffsetFromTop) {
            menu.addClass("sticky");
        }
        else {
            menu.removeClass("sticky");
        }
    });
});
