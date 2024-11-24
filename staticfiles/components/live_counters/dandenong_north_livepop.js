function dandenong_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22435;
var increase = Math.round(passed*1.49882328782365e-13*population);
document.getElementById("dandenong_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dandenong_north_livepop, 500);
}
