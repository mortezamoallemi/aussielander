function ingham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4428;
var increase = Math.round(passed*-4.6917120063837e-13*population);
document.getElementById("ingham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ingham_livepop, 500);
}
