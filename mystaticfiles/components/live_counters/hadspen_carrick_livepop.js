function hadspen_carrick_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3241;
var increase = Math.round(passed*1.32479084571239e-13*population);
document.getElementById("hadspen_carrick_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hadspen_carrick_livepop, 500);
}
