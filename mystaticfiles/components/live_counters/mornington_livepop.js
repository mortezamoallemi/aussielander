function mornington_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23991;
var increase = Math.round(passed*4.29511303740796e-13*population);
document.getElementById("mornington_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mornington_livepop, 500);
}
