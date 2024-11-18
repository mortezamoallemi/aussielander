function redwood_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16050;
var increase = Math.round(passed*9.07373983816607e-14*population);
document.getElementById("redwood_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(redwood_park_livepop, 500);
}
