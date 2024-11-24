function parkes_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3383;
var increase = Math.round(passed*-1.31090283725737e-14*population);
document.getElementById("parkes_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parkes_region_livepop, 500);
}
