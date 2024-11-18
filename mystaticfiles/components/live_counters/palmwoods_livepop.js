function palmwoods_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10612;
var increase = Math.round(passed*2.79168196620658e-13*population);
document.getElementById("palmwoods_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(palmwoods_livepop, 500);
}
