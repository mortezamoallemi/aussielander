function manunda_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5394;
var increase = Math.round(passed*5.26860460268755e-13*population);
document.getElementById("manunda_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(manunda_livepop, 500);
}
