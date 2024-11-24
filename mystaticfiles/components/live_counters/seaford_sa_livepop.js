function seaford_sa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22362;
var increase = Math.round(passed*1.05633117514842e-12*population);
document.getElementById("seaford_sa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(seaford_sa_livepop, 500);
}
