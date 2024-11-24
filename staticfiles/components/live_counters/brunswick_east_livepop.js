function brunswick_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10965;
var increase = Math.round(passed*1.6321142075316e-12*population);
document.getElementById("brunswick_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brunswick_east_livepop, 500);
}
