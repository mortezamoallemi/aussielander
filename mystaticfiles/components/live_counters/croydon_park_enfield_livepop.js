function croydon_park_enfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17222;
var increase = Math.round(passed*3.15964955119201e-13*population);
document.getElementById("croydon_park_enfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(croydon_park_enfield_livepop, 500);
}
