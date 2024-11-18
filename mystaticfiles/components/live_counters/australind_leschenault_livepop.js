function australind_leschenault_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17588;
var increase = Math.round(passed*1.07615726582912e-12*population);
document.getElementById("australind_leschenault_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(australind_leschenault_livepop, 500);
}
