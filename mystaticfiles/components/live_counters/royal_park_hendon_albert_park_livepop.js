function royal_park_hendon_albert_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5868;
var increase = Math.round(passed*1.71992139764139e-13*population);
document.getElementById("royal_park_hendon_albert_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(royal_park_hendon_albert_park_livepop, 500);
}
