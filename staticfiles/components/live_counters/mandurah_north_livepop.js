function mandurah_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17780;
var increase = Math.round(passed*2.24166802033363e-12*population);
document.getElementById("mandurah_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mandurah_north_livepop, 500);
}
