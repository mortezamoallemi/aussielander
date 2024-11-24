function innaloo_doubleview_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16555;
var increase = Math.round(passed*5.33634726956792e-13*population);
document.getElementById("innaloo_doubleview_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(innaloo_doubleview_livepop, 500);
}
