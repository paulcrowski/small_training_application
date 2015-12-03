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
            this.appendChild(tooltipElement);
            toolTipElement.classList.add("otherclass");

            var toolTipText = this.dataset.tooltip;
            tooltipElement.innerHTML = toolTipText;



        });
    }

    for ( var i=0; i < tooltipList.length; i++) {
        tooltipList[i].addEventListener("mouseout", function (event) {
            console.log("mouse out");
            this.removeChild(tooltipElement);
            tooltipElement = null;
            toolTipElement.classList.remove("otherclass");
        });
    }


});