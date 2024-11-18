function surry_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16416;
var increase = Math.round(passed*4.28284822724991e-13*population);
document.getElementById("surry_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(surry_hills_livepop, 500);
}
