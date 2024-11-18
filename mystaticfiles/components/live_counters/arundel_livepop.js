function arundel_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10244;
var increase = Math.round(passed*4.28976898572815e-13*population);
document.getElementById("arundel_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(arundel_livepop, 500);
}
