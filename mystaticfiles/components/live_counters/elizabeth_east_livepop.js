function elizabeth_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12913;
var increase = Math.round(passed*3.7791336863268e-13*population);
document.getElementById("elizabeth_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(elizabeth_east_livepop, 500);
}
