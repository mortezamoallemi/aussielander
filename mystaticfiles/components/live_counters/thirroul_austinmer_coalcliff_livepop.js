function thirroul_austinmer_coalcliff_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11306;
var increase = Math.round(passed*4.20903930891335e-13*population);
document.getElementById("thirroul_austinmer_coalcliff_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(thirroul_austinmer_coalcliff_livepop, 500);
}
