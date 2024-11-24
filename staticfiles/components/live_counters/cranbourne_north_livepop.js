function cranbourne_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20113;
var increase = Math.round(passed*2.04335280707461e-12*population);
document.getElementById("cranbourne_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cranbourne_north_livepop, 500);
}
