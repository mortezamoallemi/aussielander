function kingaroy_region_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9570;
var increase = Math.round(passed*1.63113811010505e-13*population);
document.getElementById("kingaroy_region_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kingaroy_region_north_livepop, 500);
}
