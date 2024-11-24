function barcaldine_blackall_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4765;
var increase = Math.round(passed*-8.12151182799394e-13*population);
document.getElementById("barcaldine_blackall_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(barcaldine_blackall_livepop, 500);
}
