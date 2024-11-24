function devonport_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 29386;
var increase = Math.round(passed*7.2931805909655e-14*population);
document.getElementById("devonport_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(devonport_livepop, 500);
}
