function pottsville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13181;
var increase = Math.round(passed*5.2280169531117e-13*population);
document.getElementById("pottsville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pottsville_livepop, 500);
}
