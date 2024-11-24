function oxley_qld_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7819;
var increase = Math.round(passed*7.77362503322738e-13*population);
document.getElementById("oxley_qld_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(oxley_qld_livepop, 500);
}
