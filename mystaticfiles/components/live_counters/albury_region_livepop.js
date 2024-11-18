function albury_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11611;
var increase = Math.round(passed*4.15311692479207e-13*population);
document.getElementById("albury_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(albury_region_livepop, 500);
}
