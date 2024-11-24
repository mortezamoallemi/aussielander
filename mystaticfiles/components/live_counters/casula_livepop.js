function casula_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15661;
var increase = Math.round(passed*4.0333712310675e-13*population);
document.getElementById("casula_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(casula_livepop, 500);
}
