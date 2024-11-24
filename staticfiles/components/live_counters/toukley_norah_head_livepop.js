function toukley_norah_head_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9772;
var increase = Math.round(passed*5.22626162758007e-13*population);
document.getElementById("toukley_norah_head_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(toukley_norah_head_livepop, 500);
}
