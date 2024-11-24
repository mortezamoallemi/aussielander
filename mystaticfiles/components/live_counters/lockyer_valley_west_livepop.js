function lockyer_valley_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11361;
var increase = Math.round(passed*6.58833193660614e-13*population);
document.getElementById("lockyer_valley_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lockyer_valley_west_livepop, 500);
}
