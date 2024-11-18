function grant_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5833;
var increase = Math.round(passed*4.96221607394485e-13*population);
document.getElementById("grant_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(grant_livepop, 500);
}
