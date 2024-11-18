function toronto_awaba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13425;
var increase = Math.round(passed*7.46037500641964e-14*population);
document.getElementById("toronto_awaba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(toronto_awaba_livepop, 500);
}
