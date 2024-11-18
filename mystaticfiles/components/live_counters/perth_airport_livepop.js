function perth_airport_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 27;
var increase = Math.round(passed*-4.15656299199073e-12*population);
document.getElementById("perth_airport_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(perth_airport_livepop, 500);
}
