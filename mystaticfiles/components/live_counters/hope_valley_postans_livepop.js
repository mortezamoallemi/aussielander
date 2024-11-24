function hope_valley_postans_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 66;
var increase = Math.round(passed*-3.12326537986932e-12*population);
document.getElementById("hope_valley_postans_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hope_valley_postans_livepop, 500);
}
