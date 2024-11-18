function cranbourne_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25691;
var increase = Math.round(passed*7.23482884672677e-12*population);
document.getElementById("cranbourne_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cranbourne_east_livepop, 500);
}
