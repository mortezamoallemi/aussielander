function lindisfarne_rose_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7283;
var increase = Math.round(passed*5.14016527273489e-13*population);
document.getElementById("lindisfarne_rose_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lindisfarne_rose_bay_livepop, 500);
}
