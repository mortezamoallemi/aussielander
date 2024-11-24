function edmonton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10750;
var increase = Math.round(passed*5.00650291023041e-13*population);
document.getElementById("edmonton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(edmonton_livepop, 500);
}
