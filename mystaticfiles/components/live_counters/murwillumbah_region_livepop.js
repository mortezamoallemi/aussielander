function murwillumbah_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9653;
var increase = Math.round(passed*6.93622487943581e-14*population);
document.getElementById("murwillumbah_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(murwillumbah_region_livepop, 500);
}
