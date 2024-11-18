function fremantle_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14844;
var increase = Math.round(passed*7.22828643292226e-13*population);
document.getElementById("fremantle_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fremantle_livepop, 500);
}
