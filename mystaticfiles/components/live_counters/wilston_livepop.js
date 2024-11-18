function wilston_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3937;
var increase = Math.round(passed*1.0885657610293e-13*population);
document.getElementById("wilston_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wilston_livepop, 500);
}
