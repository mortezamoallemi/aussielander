function saratoga_davistown_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6979;
var increase = Math.round(passed*3.18655415215796e-13*population);
document.getElementById("saratoga_davistown_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(saratoga_davistown_livepop, 500);
}
