function ingham_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6454;
var increase = Math.round(passed*-3.32125612403168e-13*population);
document.getElementById("ingham_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ingham_region_livepop, 500);
}
