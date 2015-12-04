var tabLinks = $(".tab li");
var paragraphs = $(".tab p");
var currentVisibleparagraph = 0;

paragraphs.eq(currentVisibleparagraph).show(0);

//tabLinks.eq(0).on('click',function(event){
//    console.log('click tab1');
//    var jQthis = $(this);
//    if (currentVisibleparagraph != 0) {
//        paragraphs.eq(currentVisibleparagraph).hide(2);
//        paragraphs.eq(0).show(5);
//        currentVisibleparagraph = 0;
//    }
//});
//
//tabLinks.eq(2).on('click',function(event){
//    console.log('click tab1');
//    var jQthis = $(this);
//    if (currentVisibleparagraph != 2) {
//        paragraphs.eq(currentVisibleparagraph).hide(2);
//        paragraphs.eq(2).show(5);
//        currentVisibleparagraph = 2;
//    }
//
//
//
//
//
//});
//
//tabLinks.eq(1).on('click',function(event){
//    console.log('click tab1');
//    var jQthis = $(this);
//    if (currentVisibleparagraph != 1) {
//        paragraphs.eq(currentVisibleparagraph).hide(2);
//        paragraphs.eq(1).show(5);
//        currentVisibleparagraph = 1;
//    }
//});

tabLinks.on('click',function(event){
    //var paragrafToShow = parseInt($(this).data("id"));
    paragraphs.eq(currentVisibleparagraph).hide();
    currentVisibleparagraph = parseInt($(this).data("id"));
    //paragraphs.eq(currentVisibleparagraph).show();
    paragraphs.eq(currentVisibleparagraph).show(0);

//currentVisibleparagraph = paragrafToShow;
/**
 * Created by POL on 2015-12-04.
 */
