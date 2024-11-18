function henderson_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18;
var increase = Math.round(passed*1.59382564866125e-12*population);
document.getElementById("henderson_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(henderson_livepop, 500);
}
