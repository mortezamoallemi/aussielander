function deniliquin_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6751;
var increase = Math.round(passed*-5.33215957086476e-14*population);
document.getElementById("deniliquin_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(deniliquin_region_livepop, 500);
}
