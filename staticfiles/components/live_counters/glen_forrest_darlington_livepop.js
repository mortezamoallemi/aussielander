function glen_forrest_darlington_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7055;
var increase = Math.round(passed*1.07963568081184e-14*population);
document.getElementById("glen_forrest_darlington_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glen_forrest_darlington_livepop, 500);
}
