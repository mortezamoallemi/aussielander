function burwood_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10269;
var increase = Math.round(passed*7.89220626796722e-14*population);
document.getElementById("burwood_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(burwood_east_livepop, 500);
}
