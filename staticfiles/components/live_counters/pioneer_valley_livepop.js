function pioneer_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8211;
var increase = Math.round(passed*9.37196676529466e-13*population);
document.getElementById("pioneer_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pioneer_valley_livepop, 500);
}
