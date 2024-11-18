function glen_waverley_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19242;
var increase = Math.round(passed*2.54539558285627e-13*population);
document.getElementById("glen_waverley_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glen_waverley_west_livepop, 500);
}
