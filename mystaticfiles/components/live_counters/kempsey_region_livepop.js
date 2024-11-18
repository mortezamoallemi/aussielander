function kempsey_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9024;
var increase = Math.round(passed*5.57646993595935e-14*population);
document.getElementById("kempsey_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kempsey_region_livepop, 500);
}
