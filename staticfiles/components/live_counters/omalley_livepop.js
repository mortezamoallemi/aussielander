function omalley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 990;
var increase = Math.round(passed*7.97624221772155e-13*population);
document.getElementById("omalley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(omalley_livepop, 500);
}
