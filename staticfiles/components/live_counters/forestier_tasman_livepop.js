function forestier_tasman_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2372;
var increase = Math.round(passed*4.56161445148272e-14*population);
document.getElementById("forestier_tasman_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(forestier_tasman_livepop, 500);
}
