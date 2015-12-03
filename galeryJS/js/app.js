/**
 * Created by POL on 2015-12-03.
 */
document.addEventListener("DOMContentLoaded", function () {
   console.log("dziala !!!");
   var listWithPictures = document.querySelectorAll("#gallery li");
   var nextButton = document.getElementById("nextPicture");
   var prevButton = document.getElementById("prevPicture");
   var visiblePicture = 0;
   listWithPictures[visiblePicture].classList.remove("invisible");

   nextButton.addEventListener("click", function(event) {
      console.log('click');
      listWithPictures[visiblePicture].classList.add("invisible");
      visiblePicture++;
      if (visiblePicture >= listWithPictures.length) {
         visiblePicture = 0;
      }
      listWithPictures[visiblePicture].classList.remove("invisible");
   });

   prevButton.addEventListener("click", function(event) {
      console.log('click');
      listWithPictures[visiblePicture].classList.add("invisible");
      visiblePicture--;
      if (visiblePicture < 0) {
         visiblePicture = listWithPictures.length-1;
      }
      listWithPictures[visiblePicture].classList.remove("invisible");
   });
});