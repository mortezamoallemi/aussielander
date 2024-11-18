function bouldercombe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1865;
var increase = Math.round(passed*-4.40533212220465e-14*population);
document.getElementById("bouldercombe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bouldercombe_livepop, 500);
}
