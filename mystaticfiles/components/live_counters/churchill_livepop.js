function churchill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11399;
var increase = Math.round(passed*6.67984795898966e-15*population);
document.getElementById("churchill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(churchill_livepop, 500);
}
