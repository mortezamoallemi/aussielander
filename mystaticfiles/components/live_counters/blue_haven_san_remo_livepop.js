function blue_haven_san_remo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11044;
var increase = Math.round(passed*1.52853681576149e-13*population);
document.getElementById("blue_haven_san_remo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(blue_haven_san_remo_livepop, 500);
}
