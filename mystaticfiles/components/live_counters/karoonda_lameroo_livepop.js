function karoonda_lameroo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3028;
var increase = Math.round(passed*-4.79900441357827e-14*population);
document.getElementById("karoonda_lameroo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(karoonda_lameroo_livepop, 500);
}
