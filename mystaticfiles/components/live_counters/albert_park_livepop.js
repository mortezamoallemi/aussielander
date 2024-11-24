function albert_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15383;
var increase = Math.round(passed*5.38381773040366e-13*population);
document.getElementById("albert_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(albert_park_livepop, 500);
}
