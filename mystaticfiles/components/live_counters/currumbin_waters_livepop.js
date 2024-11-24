function currumbin_waters_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9122;
var increase = Math.round(passed*1.69805397089939e-13*population);
document.getElementById("currumbin_waters_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(currumbin_waters_livepop, 500);
}
