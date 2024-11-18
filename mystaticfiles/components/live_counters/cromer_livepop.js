function cromer_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7485;
var increase = Math.round(passed*2.40031975705782e-13*population);
document.getElementById("cromer_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cromer_livepop, 500);
}
