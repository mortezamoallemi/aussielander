function kirwan_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7818;
var increase = Math.round(passed*-2.57528429160477e-13*population);
document.getElementById("kirwan_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kirwan_east_livepop, 500);
}
