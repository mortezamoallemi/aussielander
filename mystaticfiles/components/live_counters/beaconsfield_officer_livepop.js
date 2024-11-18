function beaconsfield_officer_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13025;
var increase = Math.round(passed*3.01560423068443e-12*population);
document.getElementById("beaconsfield_officer_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(beaconsfield_officer_livepop, 500);
}
