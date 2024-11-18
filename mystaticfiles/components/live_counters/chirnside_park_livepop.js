function chirnside_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9872;
var increase = Math.round(passed*5.00404425416633e-13*population);
document.getElementById("chirnside_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chirnside_park_livepop, 500);
}
