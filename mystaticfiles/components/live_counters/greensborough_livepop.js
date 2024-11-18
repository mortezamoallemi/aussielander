function greensborough_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20460;
var increase = Math.round(passed*7.32641906324526e-14*population);
document.getElementById("greensborough_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(greensborough_livepop, 500);
}
