function mulgrave_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19370;
var increase = Math.round(passed*5.90096098861466e-13*population);
document.getElementById("mulgrave_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mulgrave_livepop, 500);
}
