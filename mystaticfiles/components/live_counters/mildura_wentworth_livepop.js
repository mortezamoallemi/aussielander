function mildura_wentworth_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 50240;
var increase = Math.round(passed*3.50596974561031e-13*population);
document.getElementById("mildura_wentworth_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mildura_wentworth_livepop, 500);
}
