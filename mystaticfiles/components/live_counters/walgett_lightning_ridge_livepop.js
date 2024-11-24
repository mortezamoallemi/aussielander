function walgett_lightning_ridge_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6413;
var increase = Math.round(passed*-3.92094773146424e-13*population);
document.getElementById("walgett_lightning_ridge_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(walgett_lightning_ridge_livepop, 500);
}
