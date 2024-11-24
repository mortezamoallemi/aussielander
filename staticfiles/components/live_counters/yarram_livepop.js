function yarram_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5309;
var increase = Math.round(passed*6.12174485911013e-14*population);
document.getElementById("yarram_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yarram_livepop, 500);
}
