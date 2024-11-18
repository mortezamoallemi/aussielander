function thornlie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23152;
var increase = Math.round(passed*5.14323446941351e-14*population);
document.getElementById("thornlie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(thornlie_livepop, 500);
}
