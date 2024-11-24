function northam_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11115;
var increase = Math.round(passed*3.26651448557852e-13*population);
document.getElementById("northam_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(northam_livepop, 500);
}
