function narara_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6642;
var increase = Math.round(passed*1.44866015361555e-13*population);
document.getElementById("narara_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(narara_livepop, 500);
}
