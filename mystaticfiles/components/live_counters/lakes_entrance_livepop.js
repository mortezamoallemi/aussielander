function lakes_entrance_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9917;
var increase = Math.round(passed*2.9786072422014e-13*population);
document.getElementById("lakes_entrance_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lakes_entrance_livepop, 500);
}
