function chermside_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6251;
var increase = Math.round(passed*1.32246387788271e-13*population);
document.getElementById("chermside_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chermside_west_livepop, 500);
}
