function caboolture_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26825;
var increase = Math.round(passed*1.17194605597093e-12*population);
document.getElementById("caboolture_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(caboolture_livepop, 500);
}
