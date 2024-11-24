function hawthorn_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22975;
var increase = Math.round(passed*6.59763135744674e-13*population);
document.getElementById("hawthorn_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hawthorn_livepop, 500);
}
