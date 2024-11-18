function benalla_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3594;
var increase = Math.round(passed*3.94964782838259e-13*population);
document.getElementById("benalla_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(benalla_region_livepop, 500);
}
