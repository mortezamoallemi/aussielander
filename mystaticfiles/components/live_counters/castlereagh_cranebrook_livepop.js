function castlereagh_cranebrook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23724;
var increase = Math.round(passed*1.97632850903034e-12*population);
document.getElementById("castlereagh_cranebrook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(castlereagh_cranebrook_livepop, 500);
}
