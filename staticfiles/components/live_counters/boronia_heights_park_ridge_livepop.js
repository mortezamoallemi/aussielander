function boronia_heights_park_ridge_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12239;
var increase = Math.round(passed*2.76425645067116e-13*population);
document.getElementById("boronia_heights_park_ridge_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(boronia_heights_park_ridge_livepop, 500);
}
