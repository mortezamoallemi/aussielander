function svensson_heights_norville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5613;
var increase = Math.round(passed*-1.60649224591643e-13*population);
document.getElementById("svensson_heights_norville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(svensson_heights_norville_livepop, 500);
}
