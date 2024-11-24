function dowerin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3985;
var increase = Math.round(passed*-1.13562100343302e-13*population);
document.getElementById("dowerin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dowerin_livepop, 500);
}
