function upper_caboolture_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3021;
var increase = Math.round(passed*4.25415638039896e-13*population);
document.getElementById("upper_caboolture_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(upper_caboolture_livepop, 500);
}
