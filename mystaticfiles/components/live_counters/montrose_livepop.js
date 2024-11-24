function montrose_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6803;
var increase = Math.round(passed*6.65361176710062e-14*population);
document.getElementById("montrose_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(montrose_livepop, 500);
}
