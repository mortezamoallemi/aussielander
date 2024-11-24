function turner_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4049;
var increase = Math.round(passed*7.5598775170381e-13*population);
document.getElementById("turner_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(turner_livepop, 500);
}
