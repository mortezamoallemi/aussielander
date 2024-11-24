function ulladulla_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15279;
var increase = Math.round(passed*4.87735066129775e-13*population);
document.getElementById("ulladulla_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ulladulla_livepop, 500);
}
