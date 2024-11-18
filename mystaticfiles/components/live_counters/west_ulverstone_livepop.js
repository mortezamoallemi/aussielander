function west_ulverstone_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4187;
var increase = Math.round(passed*-2.26150556692081e-13*population);
document.getElementById("west_ulverstone_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_ulverstone_livepop, 500);
}
