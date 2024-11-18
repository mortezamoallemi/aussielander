function busselton_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10283;
var increase = Math.round(passed*1.29406171341883e-12*population);
document.getElementById("busselton_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(busselton_region_livepop, 500);
}
