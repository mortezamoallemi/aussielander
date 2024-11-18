function bacchus_marsh_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5872;
var increase = Math.round(passed*3.63385784562938e-13*population);
document.getElementById("bacchus_marsh_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bacchus_marsh_region_livepop, 500);
}
