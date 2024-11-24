function butler_merriwa_ridgewood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23440;
var increase = Math.round(passed*1.25685207423381e-12*population);
document.getElementById("butler_merriwa_ridgewood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(butler_merriwa_ridgewood_livepop, 500);
}
