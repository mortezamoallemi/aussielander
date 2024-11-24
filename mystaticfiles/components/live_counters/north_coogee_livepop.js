function north_coogee_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2382;
var increase = Math.round(passed*8.99196780445932e-12*population);
document.getElementById("north_coogee_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_coogee_livepop, 500);
}
