function riverstone_marsden_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17307;
var increase = Math.round(passed*2.73965077816378e-12*population);
document.getElementById("riverstone_marsden_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(riverstone_marsden_park_livepop, 500);
}
