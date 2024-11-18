function gladstone_park_westmeadows_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17606;
var increase = Math.round(passed*1.8160269023467e-13*population);
document.getElementById("gladstone_park_westmeadows_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gladstone_park_westmeadows_livepop, 500);
}
