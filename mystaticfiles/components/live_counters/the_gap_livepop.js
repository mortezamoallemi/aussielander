function the_gap_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16474;
var increase = Math.round(passed*2.04603356980885e-13*population);
document.getElementById("the_gap_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(the_gap_livepop, 500);
}
