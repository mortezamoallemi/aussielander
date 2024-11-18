function essendon_aberfeldie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 27484;
var increase = Math.round(passed*6.6193917651214e-13*population);
document.getElementById("essendon_aberfeldie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(essendon_aberfeldie_livepop, 500);
}
