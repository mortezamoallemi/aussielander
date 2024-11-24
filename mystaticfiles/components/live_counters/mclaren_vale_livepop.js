function mclaren_vale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5979;
var increase = Math.round(passed*2.70879848251691e-13*population);
document.getElementById("mclaren_vale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mclaren_vale_livepop, 500);
}
