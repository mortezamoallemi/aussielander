function leanyer_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4577;
var increase = Math.round(passed*-1.58728279685284e-13*population);
document.getElementById("leanyer_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(leanyer_livepop, 500);
}
