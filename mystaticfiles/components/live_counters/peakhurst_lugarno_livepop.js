function peakhurst_lugarno_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17937;
var increase = Math.round(passed*1.85845091777984e-13*population);
document.getElementById("peakhurst_lugarno_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(peakhurst_lugarno_livepop, 500);
}
