function newtown_qld_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9596;
var increase = Math.round(passed*2.11840143415141e-14*population);
document.getElementById("newtown_qld_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(newtown_qld_livepop, 500);
}
