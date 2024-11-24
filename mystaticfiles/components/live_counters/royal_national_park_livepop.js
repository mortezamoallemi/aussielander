function royal_national_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24;
var increase = Math.round(passed*2.18696401757819e-12*population);
document.getElementById("royal_national_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(royal_national_park_livepop, 500);
}
