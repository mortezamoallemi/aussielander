function portarlington_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7401;
var increase = Math.round(passed*8.2521999599455e-13*population);
document.getElementById("portarlington_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(portarlington_livepop, 500);
}
