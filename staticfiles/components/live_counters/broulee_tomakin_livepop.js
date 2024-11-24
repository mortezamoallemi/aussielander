function broulee_tomakin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3287;
var increase = Math.round(passed*9.56108675612817e-13*population);
document.getElementById("broulee_tomakin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(broulee_tomakin_livepop, 500);
}
