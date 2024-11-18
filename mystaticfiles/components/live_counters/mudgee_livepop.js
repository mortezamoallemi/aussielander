function mudgee_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11727;
var increase = Math.round(passed*7.10575786515522e-13*population);
document.getElementById("mudgee_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mudgee_livepop, 500);
}
