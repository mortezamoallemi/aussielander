function wishart_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10817;
var increase = Math.round(passed*2.12839370949872e-13*population);
document.getElementById("wishart_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wishart_livepop, 500);
}
