function yeronga_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9486;
var increase = Math.round(passed*7.82424100584841e-13*population);
document.getElementById("yeronga_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yeronga_livepop, 500);
}
