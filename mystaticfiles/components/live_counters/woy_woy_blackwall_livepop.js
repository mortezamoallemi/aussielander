function woy_woy_blackwall_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13928;
var increase = Math.round(passed*3.15529667860468e-13*population);
document.getElementById("woy_woy_blackwall_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(woy_woy_blackwall_livepop, 500);
}
