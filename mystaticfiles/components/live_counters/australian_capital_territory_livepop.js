function australian_capital_territory_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 397393;
var increase = Math.round(passed*6.75922601460959e-13*population);
document.getElementById("australian_capital_territory_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(australian_capital_territory_livepop, 500);
}
