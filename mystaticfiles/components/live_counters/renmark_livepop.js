function renmark_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4638;
var increase = Math.round(passed*3.49960858239744e-13*population);
document.getElementById("renmark_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(renmark_livepop, 500);
}
