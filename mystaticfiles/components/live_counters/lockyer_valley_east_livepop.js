function lockyer_valley_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19816;
var increase = Math.round(passed*7.73393545950122e-13*population);
document.getElementById("lockyer_valley_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lockyer_valley_east_livepop, 500);
}
