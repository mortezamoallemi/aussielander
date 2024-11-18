function nollamara_westminster_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17769;
var increase = Math.round(passed*1.04904327493145e-12*population);
document.getElementById("nollamara_westminster_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nollamara_westminster_livepop, 500);
}
