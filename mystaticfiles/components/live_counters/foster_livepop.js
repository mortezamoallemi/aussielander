function foster_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8730;
var increase = Math.round(passed*4.05717780082823e-13*population);
document.getElementById("foster_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(foster_livepop, 500);
}
