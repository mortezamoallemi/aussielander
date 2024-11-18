function salisbury_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17212;
var increase = Math.round(passed*6.11052086903977e-13*population);
document.getElementById("salisbury_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(salisbury_north_livepop, 500);
}
