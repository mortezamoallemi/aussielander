function lalor_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22808;
var increase = Math.round(passed*8.73919621126983e-13*population);
document.getElementById("lalor_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lalor_livepop, 500);
}
