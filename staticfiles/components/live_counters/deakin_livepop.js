function deakin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2874;
var increase = Math.round(passed*2.04054446429982e-13*population);
document.getElementById("deakin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(deakin_livepop, 500);
}
