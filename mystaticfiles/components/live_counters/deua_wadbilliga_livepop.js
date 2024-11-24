function deua_wadbilliga_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25;
var increase = Math.round(passed*-5.226886370918e-12*population);
document.getElementById("deua_wadbilliga_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(deua_wadbilliga_livepop, 500);
}
