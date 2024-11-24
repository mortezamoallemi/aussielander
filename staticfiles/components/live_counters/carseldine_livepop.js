function carseldine_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9033;
var increase = Math.round(passed*9.57639197933766e-13*population);
document.getElementById("carseldine_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(carseldine_livepop, 500);
}
