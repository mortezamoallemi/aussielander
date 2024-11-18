function indooroopilly_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12139;
var increase = Math.round(passed*2.49885614010667e-13*population);
document.getElementById("indooroopilly_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(indooroopilly_livepop, 500);
}
