function heidelberg_rosanna_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14771;
var increase = Math.round(passed*5.15897938330951e-13*population);
document.getElementById("heidelberg_rosanna_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(heidelberg_rosanna_livepop, 500);
}
