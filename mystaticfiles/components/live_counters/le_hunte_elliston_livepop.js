function le_hunte_elliston_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2262;
var increase = Math.round(passed*2.24693180894478e-14*population);
document.getElementById("le_hunte_elliston_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(le_hunte_elliston_livepop, 500);
}
