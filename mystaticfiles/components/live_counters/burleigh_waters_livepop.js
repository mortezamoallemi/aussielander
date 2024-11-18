function burleigh_waters_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14159;
var increase = Math.round(passed*1.31242583895457e-13*population);
document.getElementById("burleigh_waters_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(burleigh_waters_livepop, 500);
}
