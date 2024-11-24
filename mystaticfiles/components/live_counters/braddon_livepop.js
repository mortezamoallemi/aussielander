function braddon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5500;
var increase = Math.round(passed*1.19003545793456e-12*population);
document.getElementById("braddon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(braddon_livepop, 500);
}
