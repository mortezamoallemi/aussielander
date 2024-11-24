function wangaratta_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9601;
var increase = Math.round(passed*3.21789556128082e-13*population);
document.getElementById("wangaratta_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wangaratta_region_livepop, 500);
}
