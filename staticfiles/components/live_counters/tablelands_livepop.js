function tablelands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5981;
var increase = Math.round(passed*5.3747583845025e-13*population);
document.getElementById("tablelands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tablelands_livepop, 500);
}
