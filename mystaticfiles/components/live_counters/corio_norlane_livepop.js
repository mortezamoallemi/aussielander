function corio_norlane_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26347;
var increase = Math.round(passed*1.21756509451622e-13*population);
document.getElementById("corio_norlane_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(corio_norlane_livepop, 500);
}
