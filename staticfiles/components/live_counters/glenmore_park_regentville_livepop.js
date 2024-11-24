function glenmore_park_regentville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21203;
var increase = Math.round(passed*9.49254801089914e-14*population);
document.getElementById("glenmore_park_regentville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glenmore_park_regentville_livepop, 500);
}
