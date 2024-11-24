function nedlands_dalkeith_crawley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18531;
var increase = Math.round(passed*3.45307186392707e-13*population);
document.getElementById("nedlands_dalkeith_crawley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nedlands_dalkeith_crawley_livepop, 500);
}
