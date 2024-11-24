function greenwith_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8991;
var increase = Math.round(passed*-5.89757936851765e-14*population);
document.getElementById("greenwith_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(greenwith_livepop, 500);
}
