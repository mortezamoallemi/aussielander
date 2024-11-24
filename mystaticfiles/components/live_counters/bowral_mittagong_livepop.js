function bowral_mittagong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 37773;
var increase = Math.round(passed*5.08788913203794e-13*population);
document.getElementById("bowral_mittagong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bowral_mittagong_livepop, 500);
}
