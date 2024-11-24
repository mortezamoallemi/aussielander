function redcliffe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10161;
var increase = Math.round(passed*6.30094992698819e-13*population);
document.getElementById("redcliffe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(redcliffe_livepop, 500);
}
