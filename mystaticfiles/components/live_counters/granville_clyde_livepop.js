function granville_clyde_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20830;
var increase = Math.round(passed*8.39982098868582e-13*population);
document.getElementById("granville_clyde_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(granville_clyde_livepop, 500);
}
