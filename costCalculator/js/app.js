/**
 * Created by POL on 2015-12-04.
 */
$(document).ready(function(){
    var tabLinks = $(".tab li");

    tabLinks.on('click',function(event){
        //var paragrafToShow = parseInt($(this).data("id"));
        paragraphs.eq(currentVisibleparagraph).hide();


    });
});