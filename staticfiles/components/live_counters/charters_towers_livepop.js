function charters_towers_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8126;
var increase = Math.round(passed*-8.45038436331092e-14*population);
document.getElementById("charters_towers_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(charters_towers_livepop, 500);
}
