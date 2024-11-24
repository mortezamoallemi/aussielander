function newmarket_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4978;
var increase = Math.round(passed*7.22497960890186e-13*population);
document.getElementById("newmarket_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(newmarket_livepop, 500);
}
