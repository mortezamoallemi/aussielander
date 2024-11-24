function bellingen_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5803;
var increase = Math.round(passed*1.09128247694549e-13*population);
document.getElementById("bellingen_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bellingen_livepop, 500);
}
