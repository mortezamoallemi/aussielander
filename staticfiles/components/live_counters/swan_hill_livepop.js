function swan_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10907;
var increase = Math.round(passed*2.82994947062226e-13*population);
document.getElementById("swan_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(swan_hill_livepop, 500);
}
