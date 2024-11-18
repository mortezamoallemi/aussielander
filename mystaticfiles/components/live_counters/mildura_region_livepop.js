function mildura_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3722;
var increase = Math.round(passed*-1.46534305405936e-13*population);
document.getElementById("mildura_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mildura_region_livepop, 500);
}
