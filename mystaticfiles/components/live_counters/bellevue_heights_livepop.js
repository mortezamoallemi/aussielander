function bellevue_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7431;
var increase = Math.round(passed*1.51139817113755e-13*population);
document.getElementById("bellevue_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bellevue_heights_livepop, 500);
}
