function andergrove_beaconsfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14910;
var increase = Math.round(passed*2.18963616121373e-13*population);
document.getElementById("andergrove_beaconsfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(andergrove_beaconsfield_livepop, 500);
}
