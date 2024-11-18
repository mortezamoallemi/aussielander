function belair_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4600;
var increase = Math.round(passed*7.20999975060868e-14*population);
document.getElementById("belair_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(belair_livepop, 500);
}
