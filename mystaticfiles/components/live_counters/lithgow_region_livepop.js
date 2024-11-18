function lithgow_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8262;
var increase = Math.round(passed*2.88159825386652e-13*population);
document.getElementById("lithgow_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lithgow_region_livepop, 500);
}
