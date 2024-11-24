function farrer_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3224;
var increase = Math.round(passed*-2.56372991841172e-13*population);
document.getElementById("farrer_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(farrer_livepop, 500);
}
