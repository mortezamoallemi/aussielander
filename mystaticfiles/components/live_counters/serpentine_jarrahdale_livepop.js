function serpentine_jarrahdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4416;
var increase = Math.round(passed*6.91211844929002e-13*population);
document.getElementById("serpentine_jarrahdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(serpentine_jarrahdale_livepop, 500);
}
