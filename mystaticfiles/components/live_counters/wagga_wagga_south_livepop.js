function wagga_wagga_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21266;
var increase = Math.round(passed*1.19208727421265e-13*population);
document.getElementById("wagga_wagga_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wagga_wagga_south_livepop, 500);
}
