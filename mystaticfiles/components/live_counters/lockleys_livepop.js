function lockleys_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12711;
var increase = Math.round(passed*2.54506440015519e-13*population);
document.getElementById("lockleys_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lockleys_livepop, 500);
}
