function bellerive_rosny_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5935;
var increase = Math.round(passed*1.12116411857004e-13*population);
document.getElementById("bellerive_rosny_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bellerive_rosny_livepop, 500);
}
