function newstead_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5217;
var increase = Math.round(passed*3.11431303367847e-13*population);
document.getElementById("newstead_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(newstead_livepop, 500);
}
