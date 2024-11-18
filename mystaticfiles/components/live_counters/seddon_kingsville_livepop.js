function seddon_kingsville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9237;
var increase = Math.round(passed*6.34183115073245e-13*population);
document.getElementById("seddon_kingsville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(seddon_kingsville_livepop, 500);
}
