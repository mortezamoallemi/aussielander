function kenmore_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8766;
var increase = Math.round(passed*2.08868156673125e-13*population);
document.getElementById("kenmore_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kenmore_livepop, 500);
}
