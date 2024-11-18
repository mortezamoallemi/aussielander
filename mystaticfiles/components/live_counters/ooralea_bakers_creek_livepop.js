function ooralea_bakers_creek_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5034;
var increase = Math.round(passed*1.26453152307465e-12*population);
document.getElementById("ooralea_bakers_creek_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ooralea_bakers_creek_livepop, 500);
}
