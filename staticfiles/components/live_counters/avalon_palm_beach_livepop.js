function avalon_palm_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12374;
var increase = Math.round(passed*9.085168210637e-14*population);
document.getElementById("avalon_palm_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(avalon_palm_beach_livepop, 500);
}
