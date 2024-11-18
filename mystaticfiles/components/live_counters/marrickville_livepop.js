function marrickville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26540;
var increase = Math.round(passed*4.78561209018061e-13*population);
document.getElementById("marrickville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(marrickville_livepop, 500);
}
