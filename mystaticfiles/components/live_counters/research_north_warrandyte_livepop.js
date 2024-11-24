function research_north_warrandyte_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6704;
var increase = Math.round(passed*9.33919090004057e-14*population);
document.getElementById("research_north_warrandyte_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(research_north_warrandyte_livepop, 500);
}
