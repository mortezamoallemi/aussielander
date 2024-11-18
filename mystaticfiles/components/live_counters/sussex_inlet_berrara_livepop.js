function sussex_inlet_berrara_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4345;
var increase = Math.round(passed*3.18773512556844e-13*population);
document.getElementById("sussex_inlet_berrara_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sussex_inlet_berrara_livepop, 500);
}
