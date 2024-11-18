function guildford_south_granville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20951;
var increase = Math.round(passed*8.47585718380655e-13*population);
document.getElementById("guildford_south_granville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(guildford_south_granville_livepop, 500);
}
