function malanda_yungaburra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8481;
var increase = Math.round(passed*3.2289961225917e-13*population);
document.getElementById("malanda_yungaburra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(malanda_yungaburra_livepop, 500);
}
