function st_albans_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20091;
var increase = Math.round(passed*3.92592576303923e-13*population);
document.getElementById("st_albans_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_albans_north_livepop, 500);
}