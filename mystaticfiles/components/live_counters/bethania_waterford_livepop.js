function bethania_waterford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10869;
var increase = Math.round(passed*1.53979187111892e-12*population);
document.getElementById("bethania_waterford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bethania_waterford_livepop, 500);
}
