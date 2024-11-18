function rangeville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8309;
var increase = Math.round(passed*7.21557153324002e-14*population);
document.getElementById("rangeville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rangeville_livepop, 500);
}
