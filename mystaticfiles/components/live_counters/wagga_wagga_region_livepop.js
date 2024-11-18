function wagga_wagga_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14819;
var increase = Math.round(passed*3.65543091791907e-13*population);
document.getElementById("wagga_wagga_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wagga_wagga_region_livepop, 500);
}
