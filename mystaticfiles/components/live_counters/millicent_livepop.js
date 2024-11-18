function millicent_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5255;
var increase = Math.round(passed*-2.64951172920878e-14*population);
document.getElementById("millicent_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(millicent_livepop, 500);
}
