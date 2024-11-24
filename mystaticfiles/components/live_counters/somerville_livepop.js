function somerville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18086;
var increase = Math.round(passed*2.2703265899196e-13*population);
document.getElementById("somerville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(somerville_livepop, 500);
}
