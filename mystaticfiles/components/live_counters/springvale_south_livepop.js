function springvale_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12646;
var increase = Math.round(passed*2.36030847561902e-13*population);
document.getElementById("springvale_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(springvale_south_livepop, 500);
}
