function bundoora_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9898;
var increase = Math.round(passed*2.50274072688873e-13*population);
document.getElementById("bundoora_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bundoora_east_livepop, 500);
}
