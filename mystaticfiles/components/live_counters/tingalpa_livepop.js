function tingalpa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8705;
var increase = Math.round(passed*1.21363301748313e-13*population);
document.getElementById("tingalpa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tingalpa_livepop, 500);
}
