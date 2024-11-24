function richmond_sa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16465;
var increase = Math.round(passed*2.68287065014889e-13*population);
document.getElementById("richmond_sa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(richmond_sa_livepop, 500);
}
