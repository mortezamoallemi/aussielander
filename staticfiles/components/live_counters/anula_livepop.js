function anula_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2369;
var increase = Math.round(passed*-9.56492794335115e-14*population);
document.getElementById("anula_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(anula_livepop, 500);
}
