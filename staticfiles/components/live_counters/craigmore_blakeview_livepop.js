function craigmore_blakeview_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18121;
var increase = Math.round(passed*7.1303071706049e-13*population);
document.getElementById("craigmore_blakeview_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(craigmore_blakeview_livepop, 500);
}
