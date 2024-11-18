function seymour_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4432;
var increase = Math.round(passed*3.04847812284516e-13*population);
document.getElementById("seymour_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(seymour_region_livepop, 500);
}
