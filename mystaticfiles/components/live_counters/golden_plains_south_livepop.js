function golden_plains_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6855;
var increase = Math.round(passed*6.19551228609064e-13*population);
document.getElementById("golden_plains_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(golden_plains_south_livepop, 500);
}
