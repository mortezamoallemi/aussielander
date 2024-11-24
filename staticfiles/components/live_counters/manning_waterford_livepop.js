function manning_waterford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11453;
var increase = Math.round(passed*2.70368756052411e-13*population);
document.getElementById("manning_waterford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(manning_waterford_livepop, 500);
}
