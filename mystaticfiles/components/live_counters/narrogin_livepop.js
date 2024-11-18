function narrogin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4725;
var increase = Math.round(passed*-6.70751876037249e-15*population);
document.getElementById("narrogin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(narrogin_livepop, 500);
}
