function esk_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5158;
var increase = Math.round(passed*4.86657617017556e-13*population);
document.getElementById("esk_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(esk_livepop, 500);
}
