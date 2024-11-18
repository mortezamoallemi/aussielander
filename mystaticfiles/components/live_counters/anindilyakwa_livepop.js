function anindilyakwa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2486;
var increase = Math.round(passed*-2.15682478988163e-13*population);
document.getElementById("anindilyakwa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(anindilyakwa_livepop, 500);
}
