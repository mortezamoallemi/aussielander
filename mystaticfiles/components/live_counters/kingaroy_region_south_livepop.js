function kingaroy_region_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3922;
var increase = Math.round(passed*3.43880324736377e-13*population);
document.getElementById("kingaroy_region_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kingaroy_region_south_livepop, 500);
}
