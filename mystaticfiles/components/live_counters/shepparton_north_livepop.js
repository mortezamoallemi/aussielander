function shepparton_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18603;
var increase = Math.round(passed*4.86611158584358e-13*population);
document.getElementById("shepparton_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(shepparton_north_livepop, 500);
}
