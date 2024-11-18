function heathcote_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4508;
var increase = Math.round(passed*6.43542411918152e-13*population);
document.getElementById("heathcote_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(heathcote_livepop, 500);
}
