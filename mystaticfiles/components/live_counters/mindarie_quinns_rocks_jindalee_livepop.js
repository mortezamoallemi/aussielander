function mindarie_quinns_rocks_jindalee_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18780;
var increase = Math.round(passed*4.44790426506012e-13*population);
document.getElementById("mindarie_quinns_rocks_jindalee_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mindarie_quinns_rocks_jindalee_livepop, 500);
}
