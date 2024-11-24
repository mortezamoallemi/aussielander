function newcastle_maitland_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 463052;
var increase = Math.round(passed*9.47834533319913e-13*population);
document.getElementById("newcastle_maitland_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(newcastle_maitland_livepop, 500);
}
