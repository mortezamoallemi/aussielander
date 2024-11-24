function bayswater_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12078;
var increase = Math.round(passed*4.56029752791505e-13*population);
document.getElementById("bayswater_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bayswater_livepop, 500);
}
