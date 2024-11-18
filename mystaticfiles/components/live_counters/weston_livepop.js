function weston_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3580;
var increase = Math.round(passed*6.03567508574812e-13*population);
document.getElementById("weston_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(weston_livepop, 500);
}
