function karama_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4948;
var increase = Math.round(passed*1.33410763492592e-13*population);
document.getElementById("karama_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(karama_livepop, 500);
}
