function gunnedah_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4133;
var increase = Math.round(passed*-5.69061851743232e-13*population);
document.getElementById("gunnedah_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gunnedah_region_livepop, 500);
}
