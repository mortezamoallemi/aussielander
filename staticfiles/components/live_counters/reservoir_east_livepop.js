function reservoir_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 27075;
var increase = Math.round(passed*5.8480777226006e-13*population);
document.getElementById("reservoir_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(reservoir_east_livepop, 500);
}
