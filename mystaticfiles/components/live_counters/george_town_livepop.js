function george_town_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6847;
var increase = Math.round(passed*1.43321901000704e-13*population);
document.getElementById("george_town_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(george_town_livepop, 500);
}
