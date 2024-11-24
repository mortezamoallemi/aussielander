function fairfield_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19088;
var increase = Math.round(passed*5.83556009484161e-13*population);
document.getElementById("fairfield_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fairfield_west_livepop, 500);
}
