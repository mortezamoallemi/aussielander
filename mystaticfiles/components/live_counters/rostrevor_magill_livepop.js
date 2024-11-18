function rostrevor_magill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21654;
var increase = Math.round(passed*3.62186185127814e-13*population);
document.getElementById("rostrevor_magill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rostrevor_magill_livepop, 500);
}
