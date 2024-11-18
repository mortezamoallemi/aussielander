function white_hills_ascot_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11750;
var increase = Math.round(passed*1.88048767760114e-12*population);
document.getElementById("white_hills_ascot_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(white_hills_ascot_livepop, 500);
}
