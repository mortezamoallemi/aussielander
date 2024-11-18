function west_moonah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3915;
var increase = Math.round(passed*2.34302945589758e-13*population);
document.getElementById("west_moonah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_moonah_livepop, 500);
}
