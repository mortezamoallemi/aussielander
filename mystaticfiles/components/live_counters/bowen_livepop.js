function bowen_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9100;
var increase = Math.round(passed*1.75951081532626e-13*population);
document.getElementById("bowen_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bowen_livepop, 500);
}
