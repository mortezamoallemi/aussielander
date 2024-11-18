function derwent_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3098;
var increase = Math.round(passed*6.14431670546277e-15*population);
document.getElementById("derwent_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(derwent_valley_livepop, 500);
}
