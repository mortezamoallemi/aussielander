function mascot_eastlakes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24407;
var increase = Math.round(passed*1.30555713221836e-12*population);
document.getElementById("mascot_eastlakes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mascot_eastlakes_livepop, 500);
}
