function leopold_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12814;
var increase = Math.round(passed*1.50187395872862e-12*population);
document.getElementById("leopold_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(leopold_livepop, 500);
}
