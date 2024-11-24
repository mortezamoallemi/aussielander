function upper_kedron_ferny_grove_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9907;
var increase = Math.round(passed*5.79408860467275e-13*population);
document.getElementById("upper_kedron_ferny_grove_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(upper_kedron_ferny_grove_livepop, 500);
}
