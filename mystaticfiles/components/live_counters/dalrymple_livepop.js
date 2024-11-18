function dalrymple_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3755;
var increase = Math.round(passed*-2.98558434639199e-13*population);
document.getElementById("dalrymple_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dalrymple_livepop, 500);
}
