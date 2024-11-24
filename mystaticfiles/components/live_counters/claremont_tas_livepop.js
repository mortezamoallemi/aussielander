function claremont_tas_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7746;
var increase = Math.round(passed*5.34426311264302e-14*population);
document.getElementById("claremont_tas_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(claremont_tas_livepop, 500);
}
