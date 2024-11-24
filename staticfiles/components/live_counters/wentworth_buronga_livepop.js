function wentworth_buronga_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5965;
var increase = Math.round(passed*2.09688481868658e-13*population);
document.getElementById("wentworth_buronga_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wentworth_buronga_livepop, 500);
}
