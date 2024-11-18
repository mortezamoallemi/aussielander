function byron_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9503;
var increase = Math.round(passed*5.93517861659596e-13*population);
document.getElementById("byron_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(byron_bay_livepop, 500);
}
