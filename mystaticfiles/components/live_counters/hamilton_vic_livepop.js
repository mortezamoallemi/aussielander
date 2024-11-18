function hamilton_vic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9970;
var increase = Math.round(passed*-8.4670224977442e-14*population);
document.getElementById("hamilton_vic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hamilton_vic_livepop, 500);
}
