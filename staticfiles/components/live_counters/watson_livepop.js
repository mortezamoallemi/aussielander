function watson_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5865;
var increase = Math.round(passed*8.59065793557238e-13*population);
document.getElementById("watson_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(watson_livepop, 500);
}
