function para_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14586;
var increase = Math.round(passed*5.67770882300475e-14*population);
document.getElementById("para_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(para_hills_livepop, 500);
}
