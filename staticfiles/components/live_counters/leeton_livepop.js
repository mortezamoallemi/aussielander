function leeton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10086;
var increase = Math.round(passed*1.25097002579147e-13*population);
document.getElementById("leeton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(leeton_livepop, 500);
}
