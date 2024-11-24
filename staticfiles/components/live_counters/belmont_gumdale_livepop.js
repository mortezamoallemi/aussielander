function belmont_gumdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7371;
var increase = Math.round(passed*-5.8238514726361e-14*population);
document.getElementById("belmont_gumdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(belmont_gumdale_livepop, 500);
}
