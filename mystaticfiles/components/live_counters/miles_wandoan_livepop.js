function miles_wandoan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4063;
var increase = Math.round(passed*4.2107035095987e-13*population);
document.getElementById("miles_wandoan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(miles_wandoan_livepop, 500);
}
