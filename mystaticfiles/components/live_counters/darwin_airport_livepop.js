function darwin_airport_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17;
var increase = Math.round(passed*-2.07764728482252e-11*population);
document.getElementById("darwin_airport_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(darwin_airport_livepop, 500);
}
