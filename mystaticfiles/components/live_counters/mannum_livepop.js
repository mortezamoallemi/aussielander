function mannum_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6183;
var increase = Math.round(passed*3.70646853564654e-13*population);
document.getElementById("mannum_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mannum_livepop, 500);
}
