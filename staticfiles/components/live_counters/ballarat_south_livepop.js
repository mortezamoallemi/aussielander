function ballarat_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24232;
var increase = Math.round(passed*3.9076318173117e-13*population);
document.getElementById("ballarat_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ballarat_south_livepop, 500);
}
