function ngunnawal_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10486;
var increase = Math.round(passed*9.81146194211513e-13*population);
document.getElementById("ngunnawal_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ngunnawal_livepop, 500);
}
