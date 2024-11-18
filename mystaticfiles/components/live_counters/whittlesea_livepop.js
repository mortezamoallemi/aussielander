function whittlesea_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8129;
var increase = Math.round(passed*5.83034875536148e-13*population);
document.getElementById("whittlesea_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(whittlesea_livepop, 500);
}
