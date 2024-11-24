function kings_park_vic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13836;
var increase = Math.round(passed*1.41834404440802e-13*population);
document.getElementById("kings_park_vic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kings_park_vic_livepop, 500);
}
