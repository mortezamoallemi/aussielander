function bullsbrook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5181;
var increase = Math.round(passed*1.14233654610543e-12*population);
document.getElementById("bullsbrook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bullsbrook_livepop, 500);
}
