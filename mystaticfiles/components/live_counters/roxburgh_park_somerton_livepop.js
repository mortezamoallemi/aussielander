function roxburgh_park_somerton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21812;
var increase = Math.round(passed*5.33873980487369e-13*population);
document.getElementById("roxburgh_park_somerton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(roxburgh_park_somerton_livepop, 500);
}