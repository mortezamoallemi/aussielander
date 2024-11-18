function murray_bridge_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3644;
var increase = Math.round(passed*4.4700476248485e-13*population);
document.getElementById("murray_bridge_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(murray_bridge_region_livepop, 500);
}
