function warriewood_mona_vale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24134;
var increase = Math.round(passed*6.31683131849681e-13*population);
document.getElementById("warriewood_mona_vale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(warriewood_mona_vale_livepop, 500);
}
