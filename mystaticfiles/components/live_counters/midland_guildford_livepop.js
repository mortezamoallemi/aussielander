function midland_guildford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10672;
var increase = Math.round(passed*6.81279253397133e-13*population);
document.getElementById("midland_guildford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(midland_guildford_livepop, 500);
}
