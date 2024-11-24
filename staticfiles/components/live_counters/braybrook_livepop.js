function braybrook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18232;
var increase = Math.round(passed*8.56000558228221e-13*population);
document.getElementById("braybrook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(braybrook_livepop, 500);
}
