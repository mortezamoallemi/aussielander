function elizabeth_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10373;
var increase = Math.round(passed*3.10739818136103e-13*population);
document.getElementById("elizabeth_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(elizabeth_livepop, 500);
}
