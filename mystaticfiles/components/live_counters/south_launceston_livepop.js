function south_launceston_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4610;
var increase = Math.round(passed*2.2972502198473e-13*population);
document.getElementById("south_launceston_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_launceston_livepop, 500);
}
