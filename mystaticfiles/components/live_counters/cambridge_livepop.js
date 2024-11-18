function cambridge_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7654;
var increase = Math.round(passed*3.72837600921958e-13*population);
document.getElementById("cambridge_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cambridge_livepop, 500);
}
