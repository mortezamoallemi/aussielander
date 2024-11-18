function apy_lands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2270;
var increase = Math.round(passed*-4.55405173392135e-13*population);
document.getElementById("apy_lands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(apy_lands_livepop, 500);
}
