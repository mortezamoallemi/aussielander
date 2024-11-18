function glendale_cardiff_hillsborough_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23387;
var increase = Math.round(passed*1.15204534981832e-13*population);
document.getElementById("glendale_cardiff_hillsborough_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glendale_cardiff_hillsborough_livepop, 500);
}
