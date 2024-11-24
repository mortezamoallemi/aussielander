function park_avenue_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5089;
var increase = Math.round(passed*-3.38496017647673e-13*population);
document.getElementById("park_avenue_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(park_avenue_livepop, 500);
}
