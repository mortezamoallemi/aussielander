function penola_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3118;
var increase = Math.round(passed*8.18856875881361e-14*population);
document.getElementById("penola_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(penola_livepop, 500);
}
