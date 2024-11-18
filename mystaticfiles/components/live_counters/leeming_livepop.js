function leeming_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10729;
var increase = Math.round(passed*-2.11020878354404e-13*population);
document.getElementById("leeming_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(leeming_livepop, 500);
}
