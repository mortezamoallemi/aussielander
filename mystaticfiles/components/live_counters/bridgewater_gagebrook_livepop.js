function bridgewater_gagebrook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7287;
var increase = Math.round(passed*-1.73410315696885e-13*population);
document.getElementById("bridgewater_gagebrook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bridgewater_gagebrook_livepop, 500);
}
