function berrimah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1281;
var increase = Math.round(passed*-4.3011410563443e-12*population);
document.getElementById("berrimah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(berrimah_livepop, 500);
}
