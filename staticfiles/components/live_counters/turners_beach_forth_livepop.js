function turners_beach_forth_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3112;
var increase = Math.round(passed*1.19313797055457e-13*population);
document.getElementById("turners_beach_forth_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(turners_beach_forth_livepop, 500);
}
