function nuriootpa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6546;
var increase = Math.round(passed*5.85202732702156e-13*population);
document.getElementById("nuriootpa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nuriootpa_livepop, 500);
}
