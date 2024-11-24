function tapping_ashby_sinagra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13263;
var increase = Math.round(passed*3.58531530376282e-13*population);
document.getElementById("tapping_ashby_sinagra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tapping_ashby_sinagra_livepop, 500);
}
