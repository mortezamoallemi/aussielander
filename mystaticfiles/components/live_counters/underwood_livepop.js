function underwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6344;
var increase = Math.round(passed*1.11045644810412e-12*population);
document.getElementById("underwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(underwood_livepop, 500);
}
