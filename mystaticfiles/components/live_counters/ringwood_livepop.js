function ringwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17144;
var increase = Math.round(passed*4.34802517058876e-13*population);
document.getElementById("ringwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ringwood_livepop, 500);
}
