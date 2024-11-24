function botany_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10822;
var increase = Math.round(passed*1.25216743678957e-12*population);
document.getElementById("botany_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(botany_livepop, 500);
}
