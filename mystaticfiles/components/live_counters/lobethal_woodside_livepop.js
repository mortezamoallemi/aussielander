function lobethal_woodside_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9023;
var increase = Math.round(passed*9.14384444518659e-15*population);
document.getElementById("lobethal_woodside_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lobethal_woodside_livepop, 500);
}
