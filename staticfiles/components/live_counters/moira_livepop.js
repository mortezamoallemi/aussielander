function moira_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2570;
var increase = Math.round(passed*2.22481715483274e-14*population);
document.getElementById("moira_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moira_livepop, 500);
}
