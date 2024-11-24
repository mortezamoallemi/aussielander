function narrabri_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4797;
var increase = Math.round(passed*-1.58450011136399e-14*population);
document.getElementById("narrabri_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(narrabri_region_livepop, 500);
}
