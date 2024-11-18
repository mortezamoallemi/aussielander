function northern_midlands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3629;
var increase = Math.round(passed*1.92525447604631e-14*population);
document.getElementById("northern_midlands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(northern_midlands_livepop, 500);
}
