function elwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15220;
var increase = Math.round(passed*2.4640311961171e-13*population);
document.getElementById("elwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(elwood_livepop, 500);
}
