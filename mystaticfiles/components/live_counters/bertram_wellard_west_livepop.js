function bertram_wellard_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14015;
var increase = Math.round(passed*3.690450782525e-12*population);
document.getElementById("bertram_wellard_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bertram_wellard_west_livepop, 500);
}
