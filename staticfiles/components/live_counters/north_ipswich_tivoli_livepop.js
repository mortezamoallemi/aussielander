function north_ipswich_tivoli_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6397;
var increase = Math.round(passed*7.17852349975681e-14*population);
document.getElementById("north_ipswich_tivoli_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_ipswich_tivoli_livepop, 500);
}
