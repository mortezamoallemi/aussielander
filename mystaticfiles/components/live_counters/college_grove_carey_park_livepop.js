function college_grove_carey_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6744;
var increase = Math.round(passed*2.15196795770879e-13*population);
document.getElementById("college_grove_carey_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(college_grove_carey_park_livepop, 500);
}
