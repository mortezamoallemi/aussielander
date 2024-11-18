function tanunda_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4547;
var increase = Math.round(passed*1.85396790132416e-13*population);
document.getElementById("tanunda_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tanunda_livepop, 500);
}
