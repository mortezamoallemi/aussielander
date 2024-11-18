function paradise_newton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19720;
var increase = Math.round(passed*3.05358251522233e-13*population);
document.getElementById("paradise_newton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(paradise_newton_livepop, 500);
}
