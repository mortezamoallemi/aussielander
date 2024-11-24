function echuca_moama_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20425;
var increase = Math.round(passed*3.56672519963344e-13*population);
document.getElementById("echuca_moama_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(echuca_moama_livepop, 500);
}
