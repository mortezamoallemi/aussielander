function surrey_hills_east_mont_albert_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9965;
var increase = Math.round(passed*1.24683781725976e-13*population);
document.getElementById("surrey_hills_east_mont_albert_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(surrey_hills_east_mont_albert_livepop, 500);
}
