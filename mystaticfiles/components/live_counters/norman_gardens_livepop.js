function norman_gardens_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10124;
var increase = Math.round(passed*8.65132768390934e-13*population);
document.getElementById("norman_gardens_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(norman_gardens_livepop, 500);
}
