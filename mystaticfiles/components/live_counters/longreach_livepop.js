function longreach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3663;
var increase = Math.round(passed*-8.4944703964747e-13*population);
document.getElementById("longreach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(longreach_livepop, 500);
}
