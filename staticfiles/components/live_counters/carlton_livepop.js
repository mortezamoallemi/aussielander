function carlton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18998;
var increase = Math.round(passed*1.88821329072808e-12*population);
document.getElementById("carlton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(carlton_livepop, 500);
}
