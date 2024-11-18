function guildford_west_merrylands_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20722;
var increase = Math.round(passed*5.43536787876178e-13*population);
document.getElementById("guildford_west_merrylands_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(guildford_west_merrylands_west_livepop, 500);
}
