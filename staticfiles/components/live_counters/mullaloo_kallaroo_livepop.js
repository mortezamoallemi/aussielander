function mullaloo_kallaroo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11169;
var increase = Math.round(passed*9.38125861254721e-14*population);
document.getElementById("mullaloo_kallaroo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mullaloo_kallaroo_livepop, 500);
}
