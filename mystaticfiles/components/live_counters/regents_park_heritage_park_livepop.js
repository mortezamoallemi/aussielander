function regents_park_heritage_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15938;
var increase = Math.round(passed*1.64871584148302e-13*population);
document.getElementById("regents_park_heritage_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(regents_park_heritage_park_livepop, 500);
}
