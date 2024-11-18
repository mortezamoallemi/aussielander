function moonee_ponds_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14252;
var increase = Math.round(passed*3.28767103152763e-13*population);
document.getElementById("moonee_ponds_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moonee_ponds_livepop, 500);
}
