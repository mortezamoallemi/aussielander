function coconut_grove_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3053;
var increase = Math.round(passed*4.34138152094152e-13*population);
document.getElementById("coconut_grove_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coconut_grove_livepop, 500);
}
