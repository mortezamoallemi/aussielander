function ascot_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5142;
var increase = Math.round(passed*-2.95318736044582e-14*population);
document.getElementById("ascot_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ascot_livepop, 500);
}
