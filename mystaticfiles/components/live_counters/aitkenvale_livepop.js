function aitkenvale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4792;
var increase = Math.round(passed*-1.5427499361543e-13*population);
document.getElementById("aitkenvale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(aitkenvale_livepop, 500);
}
