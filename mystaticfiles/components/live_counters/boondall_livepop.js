function boondall_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9218;
var increase = Math.round(passed*3.31893654767853e-13*population);
document.getElementById("boondall_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(boondall_livepop, 500);
}
