function forde_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4307;
var increase = Math.round(passed*3.9126824396392e-12*population);
document.getElementById("forde_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(forde_livepop, 500);
}
