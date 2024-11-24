function deniliquin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7434;
var increase = Math.round(passed*2.72805091800309e-13*population);
document.getElementById("deniliquin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(deniliquin_livepop, 500);
}
