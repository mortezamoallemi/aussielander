function kyneton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9649;
var increase = Math.round(passed*5.61090775643755e-13*population);
document.getElementById("kyneton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kyneton_livepop, 500);
}
