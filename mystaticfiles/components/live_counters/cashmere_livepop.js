function cashmere_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18805;
var increase = Math.round(passed*1.25573040900873e-12*population);
document.getElementById("cashmere_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cashmere_livepop, 500);
}
