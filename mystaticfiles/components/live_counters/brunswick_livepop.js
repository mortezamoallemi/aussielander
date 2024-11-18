function brunswick_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25437;
var increase = Math.round(passed*7.04391148051269e-13*population);
document.getElementById("brunswick_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brunswick_livepop, 500);
}
