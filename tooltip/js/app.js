/**
 * Created by POL on 2015-12-03.
 */
document.addEventListener("DOMContentLoaded", function () {
    console.log("dziala !!!");

    var tooltipList = document.getElementsByClassName("tooltip");
    var tooltipElement = null;

    for ( var i=0; i < tooltipList.length; i++) {
        tooltipList[i].addEventListener("mouseover", function (event) {
            tooltipElement = document.createElement("div");
            tooltipElement.classList.add("tooltipShow");

            var toolTipText = this.dataset.tooltip;
            tooltipElement.innerHTML = toolTipText;

            this.appendChild(tooltipElement);

        });
    }

    for ( var i=0; i < tooltipList.length; i++) {
        tooltipList[i].addEventListener("mouseout", function (event) {
            console.log("mouse out");
            this.removeChild(tooltipElement);
            tooltipElement = null;
            this.classList.remove("otherclass");




        });
    }


});