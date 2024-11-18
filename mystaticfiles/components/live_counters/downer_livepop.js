function downer_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3660;
var increase = Math.round(passed*1.84602258739667e-13*population);
document.getElementById("downer_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(downer_livepop, 500);
}
