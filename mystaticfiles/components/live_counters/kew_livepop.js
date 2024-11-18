function kew_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24729;
var increase = Math.round(passed*2.99584829153618e-13*population);
document.getElementById("kew_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kew_livepop, 500);
}
