function balwyn_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15834;
var increase = Math.round(passed*9.97101296443941e-14*population);
document.getElementById("balwyn_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(balwyn_livepop, 500);
}