function orbost_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6453;
var increase = Math.round(passed*-2.4200421249416e-13*population);
document.getElementById("orbost_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(orbost_livepop, 500);
}
