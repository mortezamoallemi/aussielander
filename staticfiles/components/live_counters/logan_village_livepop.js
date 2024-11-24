function logan_village_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7000;
var increase = Math.round(passed*1.13493023050628e-12*population);
document.getElementById("logan_village_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(logan_village_livepop, 500);
}
