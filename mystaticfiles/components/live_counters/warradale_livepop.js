function warradale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14965;
var increase = Math.round(passed*8.24308901846533e-13*population);
document.getElementById("warradale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(warradale_livepop, 500);
}
