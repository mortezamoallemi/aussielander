function grovedale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23274;
var increase = Math.round(passed*1.0569981088847e-12*population);
document.getElementById("grovedale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(grovedale_livepop, 500);
}
