function bairnsdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14726;
var increase = Math.round(passed*6.7460735944738e-13*population);
document.getElementById("bairnsdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bairnsdale_livepop, 500);
}
