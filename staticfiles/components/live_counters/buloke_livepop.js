function buloke_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6202;
var increase = Math.round(passed*-1.87401126804343e-13*population);
document.getElementById("buloke_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(buloke_livepop, 500);
}
