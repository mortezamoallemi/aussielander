function booral_river_heads_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4602;
var increase = Math.round(passed*6.41909759337897e-13*population);
document.getElementById("booral_river_heads_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(booral_river_heads_livepop, 500);
}
