function manly_fairlight_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21704;
var increase = Math.round(passed*3.41869442378508e-13*population);
document.getElementById("manly_fairlight_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(manly_fairlight_livepop, 500);
}
