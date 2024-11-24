function gordon_killara_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21328;
var increase = Math.round(passed*8.16000912091374e-13*population);
document.getElementById("gordon_killara_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gordon_killara_livepop, 500);
}
