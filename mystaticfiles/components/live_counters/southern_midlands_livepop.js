function southern_midlands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6058;
var increase = Math.round(passed*-1.35947713296008e-14*population);
document.getElementById("southern_midlands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(southern_midlands_livepop, 500);
}
