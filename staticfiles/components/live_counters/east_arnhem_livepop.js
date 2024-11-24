function east_arnhem_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7438;
var increase = Math.round(passed*-6.19394799657304e-14*population);
document.getElementById("east_arnhem_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(east_arnhem_livepop, 500);
}
