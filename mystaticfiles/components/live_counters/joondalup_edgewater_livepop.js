function joondalup_edgewater_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13602;
var increase = Math.round(passed*-5.84773084231324e-14*population);
document.getElementById("joondalup_edgewater_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(joondalup_edgewater_livepop, 500);
}
