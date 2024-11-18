function yarraville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14801;
var increase = Math.round(passed*4.69429378728073e-13*population);
document.getElementById("yarraville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yarraville_livepop, 500);
}
