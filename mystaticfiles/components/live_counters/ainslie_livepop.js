function ainslie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5183;
var increase = Math.round(passed*9.98948470823804e-14*population);
document.getElementById("ainslie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ainslie_livepop, 500);
}
