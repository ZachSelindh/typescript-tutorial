"use strict";
function addBasics(n1, n2, showResult, phrase) {
    if (showResult) {
        var result_1 = n1 + n2;
        console.log(phrase + result_1);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResultBasics = true;
var resultPhrase = "Result is: ";
var resultBasics = addBasics(number1, number2, printResultBasics, resultPhrase);
