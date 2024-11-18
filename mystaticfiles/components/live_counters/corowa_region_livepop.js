function corowa_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6742;
var increase = Math.round(passed*2.22077375643018e-13*population);
document.getElementById("corowa_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(corowa_region_livepop, 500);
}
