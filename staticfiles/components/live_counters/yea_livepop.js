function yea_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3558;
var increase = Math.round(passed*3.01142208533425e-13*population);
document.getElementById("yea_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yea_livepop, 500);
}
