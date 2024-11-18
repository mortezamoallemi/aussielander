function collinsville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3460;
var increase = Math.round(passed*-9.87559624486307e-13*population);
document.getElementById("collinsville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(collinsville_livepop, 500);
}
