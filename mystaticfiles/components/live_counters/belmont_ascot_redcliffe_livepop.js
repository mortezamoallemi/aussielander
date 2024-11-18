function belmont_ascot_redcliffe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14324;
var increase = Math.round(passed*4.76123032884275e-13*population);
document.getElementById("belmont_ascot_redcliffe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(belmont_ascot_redcliffe_livepop, 500);
}
