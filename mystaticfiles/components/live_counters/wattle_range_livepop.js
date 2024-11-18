function wattle_range_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3273;
var increase = Math.round(passed*9.76305979562577e-14*population);
document.getElementById("wattle_range_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wattle_range_livepop, 500);
}
