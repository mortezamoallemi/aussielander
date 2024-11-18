function geebung_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4323;
var increase = Math.round(passed*3.53067489304297e-14*population);
document.getElementById("geebung_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(geebung_livepop, 500);
}
