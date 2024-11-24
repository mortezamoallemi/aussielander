function clarkson_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12968;
var increase = Math.round(passed*6.59069698027503e-13*population);
document.getElementById("clarkson_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(clarkson_livepop, 500);
}
