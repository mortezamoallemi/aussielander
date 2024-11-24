function proserpine_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8294;
var increase = Math.round(passed*2.39994629522831e-13*population);
document.getElementById("proserpine_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(proserpine_livepop, 500);
}
