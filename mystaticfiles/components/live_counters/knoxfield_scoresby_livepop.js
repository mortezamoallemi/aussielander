function knoxfield_scoresby_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15087;
var increase = Math.round(passed*9.29111565798886e-13*population);
document.getElementById("knoxfield_scoresby_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(knoxfield_scoresby_livepop, 500);
}
