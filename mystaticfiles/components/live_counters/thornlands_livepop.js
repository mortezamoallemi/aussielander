function thornlands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14694;
var increase = Math.round(passed*8.72180594250858e-13*population);
document.getElementById("thornlands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(thornlands_livepop, 500);
}
