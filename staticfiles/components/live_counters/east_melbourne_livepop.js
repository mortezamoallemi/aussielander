function east_melbourne_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4964;
var increase = Math.round(passed*7.5829365328731e-14*population);
document.getElementById("east_melbourne_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(east_melbourne_livepop, 500);
}
