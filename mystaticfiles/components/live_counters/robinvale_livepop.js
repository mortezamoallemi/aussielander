function robinvale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3313;
var increase = Math.round(passed*-2.95463048971908e-13*population);
document.getElementById("robinvale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(robinvale_livepop, 500);
}
