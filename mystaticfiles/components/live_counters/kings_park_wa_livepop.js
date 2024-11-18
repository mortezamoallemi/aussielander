function kings_park_wa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20;
var increase = Math.round(passed*-3.36522229237805e-12*population);
document.getElementById("kings_park_wa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kings_park_wa_livepop, 500);
}
