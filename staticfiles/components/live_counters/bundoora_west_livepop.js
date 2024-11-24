function bundoora_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6190;
var increase = Math.round(passed*7.00548336712582e-14*population);
document.getElementById("bundoora_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bundoora_west_livepop, 500);
}
