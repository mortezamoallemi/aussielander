function grafton_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15313;
var increase = Math.round(passed*1.17036759179182e-13*population);
document.getElementById("grafton_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(grafton_region_livepop, 500);
}
