function woolner_bayview_winnellie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2818;
var increase = Math.round(passed*3.87433321725012e-13*population);
document.getElementById("woolner_bayview_winnellie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(woolner_bayview_winnellie_livepop, 500);
}
