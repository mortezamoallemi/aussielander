function cook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2804;
var increase = Math.round(passed*-2.20051470510839e-13*population);
document.getElementById("cook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cook_livepop, 500);
}
