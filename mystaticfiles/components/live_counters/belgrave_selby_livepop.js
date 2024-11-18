function belgrave_selby_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10016;
var increase = Math.round(passed*-2.90597267337903e-14*population);
document.getElementById("belgrave_selby_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(belgrave_selby_livepop, 500);
}
