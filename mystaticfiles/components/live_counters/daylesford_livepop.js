function daylesford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8956;
var increase = Math.round(passed*4.12511590832778e-13*population);
document.getElementById("daylesford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(daylesford_livepop, 500);
}
