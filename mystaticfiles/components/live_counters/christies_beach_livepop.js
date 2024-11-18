function christies_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10237;
var increase = Math.round(passed*2.55355987694157e-13*population);
document.getElementById("christies_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(christies_beach_livepop, 500);
}
