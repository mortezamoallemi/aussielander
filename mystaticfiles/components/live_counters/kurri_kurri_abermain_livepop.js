function kurri_kurri_abermain_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17639;
var increase = Math.round(passed*5.40490752172387e-13*population);
document.getElementById("kurri_kurri_abermain_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kurri_kurri_abermain_livepop, 500);
}
