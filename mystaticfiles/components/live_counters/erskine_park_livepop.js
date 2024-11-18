function erskine_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6440;
var increase = Math.round(passed*-2.20645768469592e-13*population);
document.getElementById("erskine_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(erskine_park_livepop, 500);
}
