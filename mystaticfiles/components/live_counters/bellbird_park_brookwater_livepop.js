function bellbird_park_brookwater_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13761;
var increase = Math.round(passed*3.08304657277509e-12*population);
document.getElementById("bellbird_park_brookwater_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bellbird_park_brookwater_livepop, 500);
}
