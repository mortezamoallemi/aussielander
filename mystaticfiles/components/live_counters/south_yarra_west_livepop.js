function south_yarra_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6097;
var increase = Math.round(passed*1.03822720692933e-13*population);
document.getElementById("south_yarra_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_yarra_west_livepop, 500);
}
