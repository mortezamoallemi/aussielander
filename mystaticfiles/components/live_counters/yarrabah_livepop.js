function yarrabah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2560;
var increase = Math.round(passed*3.88195909721566e-13*population);
document.getElementById("yarrabah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yarrabah_livepop, 500);
}
