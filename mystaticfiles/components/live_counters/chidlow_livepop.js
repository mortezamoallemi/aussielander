function chidlow_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4715;
var increase = Math.round(passed*1.00660212530295e-12*population);
document.getElementById("chidlow_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chidlow_livepop, 500);
}
