function swansea_caves_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11546;
var increase = Math.round(passed*4.6483701164469e-13*population);
document.getElementById("swansea_caves_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(swansea_caves_beach_livepop, 500);
}
