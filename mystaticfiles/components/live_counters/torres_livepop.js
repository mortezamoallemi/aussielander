function torres_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3612;
var increase = Math.round(passed*6.52214838275714e-13*population);
document.getElementById("torres_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(torres_livepop, 500);
}
