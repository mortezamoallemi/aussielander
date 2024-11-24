function molendinar_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6378;
var increase = Math.round(passed*1.68268994233257e-13*population);
document.getElementById("molendinar_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(molendinar_livepop, 500);
}
