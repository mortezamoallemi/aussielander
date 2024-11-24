function leichhardt_annandale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26388;
var increase = Math.round(passed*4.88170242224703e-13*population);
document.getElementById("leichhardt_annandale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(leichhardt_annandale_livepop, 500);
}
