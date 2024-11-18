function alexandra_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16346;
var increase = Math.round(passed*-1.39676075046705e-13*population);
document.getElementById("alexandra_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(alexandra_hills_livepop, 500);
}
