function kelvin_grove_herston_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10079;
var increase = Math.round(passed*1.58834477159678e-12*population);
document.getElementById("kelvin_grove_herston_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kelvin_grove_herston_livepop, 500);
}
