function browns_plains_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7374;
var increase = Math.round(passed*6.44918038945398e-13*population);
document.getElementById("browns_plains_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(browns_plains_livepop, 500);
}
