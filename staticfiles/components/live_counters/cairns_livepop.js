function cairns_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 144785;
var increase = Math.round(passed*4.95097765253306e-13*population);
document.getElementById("cairns_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cairns_livepop, 500);
}
