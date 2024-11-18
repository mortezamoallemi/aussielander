function parklea_kellyville_ridge_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 32645;
var increase = Math.round(passed*2.38772720810378e-12*population);
document.getElementById("parklea_kellyville_ridge_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parklea_kellyville_ridge_livepop, 500);
}
