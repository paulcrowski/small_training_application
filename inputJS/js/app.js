/**
 * Created by POL on 2015-12-03.
 */

// celcius to farantheit and farntheit to celcius

document.addEventListener("DOMContentLoaded", function() {
    var celsToFarButton = document.getElementById('celcToFar');
    var fartoCelButton = document.getElementById('FarTocel');
    var resultElement = document.getElementById('resultText');
    var unitInput = document.getElementById('unitInput');

    celsToFarButton.addEventListener("click", function(event){
        var userInput = unitInput.value;
        var unitsToConvert = parseFloat(userInput);
        unitInput.value = "";
        if (isNaN(unitsToConvert)){
            console.log("not a number");
            resultElement.innerHTML = 'zle dane';
        } else {
            console.log('proper input');
            unitsConverted = unitsToConvert * 1.8 +32;
            resultElement.innerHTML = unitsConverted +" cels jes towne " + unitsToConvert + " z faranheita"  ;

        }
    });

    fartoCelButton.addEventListener("click", function(event){
        var userInput = unitInput.value;
        var unitsToConvert = parseFloat(userInput);
        unitInput.value = "";
        if (isNaN(unitsToConvert)){
            console.log("not a number");
            resultElement.innerHTML = 'zle dane';
        } else {
            console.log('proper input');
            unitsConverted = (unitsToConvert -32) / 1.8;
            resultElement.innerHTML = unitsConverted +" farantheit " + unitsToConvert + " z celsiusza"  ;

        }
    })



});