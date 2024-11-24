function windsor_bligh_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15330;
var increase = Math.round(passed*-5.43740995342479e-14*population);
document.getElementById("windsor_bligh_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(windsor_bligh_park_livepop, 500);
}
