function aspendale_gardens_waterways_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8989;
var increase = Math.round(passed*1.658309681074e-13*population);
document.getElementById("aspendale_gardens_waterways_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(aspendale_gardens_waterways_livepop, 500);
}
