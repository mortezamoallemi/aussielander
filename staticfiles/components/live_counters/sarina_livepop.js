function sarina_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11616;
var increase = Math.round(passed*1.09287609273922e-14*population);
document.getElementById("sarina_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sarina_livepop, 500);
}
