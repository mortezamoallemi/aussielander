function maryborough_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5267;
var increase = Math.round(passed*2.5051843932953e-13*population);
document.getElementById("maryborough_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maryborough_region_livepop, 500);
}
