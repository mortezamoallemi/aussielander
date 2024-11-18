function wandin_seville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7598;
var increase = Math.round(passed*1.60607289583686e-13*population);
document.getElementById("wandin_seville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wandin_seville_livepop, 500);
}
