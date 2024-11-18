function denmark_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5850;
var increase = Math.round(passed*7.54296981248151e-13*population);
document.getElementById("denmark_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(denmark_livepop, 500);
}
