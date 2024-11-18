function north_nowra_bomaderry_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15759;
var increase = Math.round(passed*2.14044787059719e-13*population);
document.getElementById("north_nowra_bomaderry_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_nowra_bomaderry_livepop, 500);
}
