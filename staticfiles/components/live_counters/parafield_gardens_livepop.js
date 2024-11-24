function parafield_gardens_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16943;
var increase = Math.round(passed*6.40677504383755e-13*population);
document.getElementById("parafield_gardens_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parafield_gardens_livepop, 500);
}
