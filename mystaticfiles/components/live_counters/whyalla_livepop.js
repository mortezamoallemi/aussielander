function whyalla_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21754;
var increase = Math.round(passed*-6.90074974079534e-14*population);
document.getElementById("whyalla_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(whyalla_livepop, 500);
}
