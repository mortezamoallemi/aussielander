function deagon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3674;
var increase = Math.round(passed*3.80596129650565e-13*population);
document.getElementById("deagon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(deagon_livepop, 500);
}
