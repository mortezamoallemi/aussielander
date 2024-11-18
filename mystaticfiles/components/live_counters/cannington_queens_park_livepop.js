function cannington_queens_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18047;
var increase = Math.round(passed*1.19441310256078e-12*population);
document.getElementById("cannington_queens_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cannington_queens_park_livepop, 500);
}
