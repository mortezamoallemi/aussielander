function taylors_lakes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17337;
var increase = Math.round(passed*-2.16123932598051e-13*population);
document.getElementById("taylors_lakes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(taylors_lakes_livepop, 500);
}
