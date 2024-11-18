function wallan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16218;
var increase = Math.round(passed*1.89445843820255e-12*population);
document.getElementById("wallan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wallan_livepop, 500);
}
