function freshwater_stratford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3566;
var increase = Math.round(passed*-9.35643400599742e-14*population);
document.getElementById("freshwater_stratford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(freshwater_stratford_livepop, 500);
}
