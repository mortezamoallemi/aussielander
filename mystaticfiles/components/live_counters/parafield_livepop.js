function parafield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 105;
var increase = Math.round(passed*2.04989224930995e-12*population);
document.getElementById("parafield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parafield_livepop, 500);
}
