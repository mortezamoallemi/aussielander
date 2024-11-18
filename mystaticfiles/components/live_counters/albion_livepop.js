function albion_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2793;
var increase = Math.round(passed*5.74777066231389e-13*population);
document.getElementById("albion_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(albion_livepop, 500);
}
