function invermay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3055;
var increase = Math.round(passed*-6.40294350419234e-14*population);
document.getElementById("invermay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(invermay_livepop, 500);
}
