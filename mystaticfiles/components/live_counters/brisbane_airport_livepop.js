function brisbane_airport_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 192;
var increase = Math.round(passed*4.73513359659393e-12*population);
document.getElementById("brisbane_airport_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brisbane_airport_livepop, 500);
}
