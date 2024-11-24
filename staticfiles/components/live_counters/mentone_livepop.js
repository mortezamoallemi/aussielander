function mentone_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12965;
var increase = Math.round(passed*6.6955093010643e-13*population);
document.getElementById("mentone_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mentone_livepop, 500);
}
