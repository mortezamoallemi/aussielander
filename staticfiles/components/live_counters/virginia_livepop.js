function virginia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3294;
var increase = Math.round(passed*9.15986947139229e-13*population);
document.getElementById("virginia_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(virginia_livepop, 500);
}
