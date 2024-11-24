function albury_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9845;
var increase = Math.round(passed*3.55035755687062e-13*population);
document.getElementById("albury_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(albury_north_livepop, 500);
}
