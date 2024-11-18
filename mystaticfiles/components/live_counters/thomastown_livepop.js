function thomastown_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20311;
var increase = Math.round(passed*-6.55370608388798e-15*population);
document.getElementById("thomastown_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(thomastown_livepop, 500);
}
