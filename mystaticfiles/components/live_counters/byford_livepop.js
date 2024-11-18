function byford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16108;
var increase = Math.round(passed*4.31609709713977e-12*population);
document.getElementById("byford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(byford_livepop, 500);
}
