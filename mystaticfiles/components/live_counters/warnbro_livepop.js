function warnbro_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10699;
var increase = Math.round(passed*-2.34493868033359e-13*population);
document.getElementById("warnbro_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(warnbro_livepop, 500);
}
