function smithfield_elizabeth_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12234;
var increase = Math.round(passed*3.69127611876829e-14*population);
document.getElementById("smithfield_elizabeth_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(smithfield_elizabeth_north_livepop, 500);
}
