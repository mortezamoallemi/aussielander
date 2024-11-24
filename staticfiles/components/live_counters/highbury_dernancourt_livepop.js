function highbury_dernancourt_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10474;
var increase = Math.round(passed*6.75686558549942e-14*population);
document.getElementById("highbury_dernancourt_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(highbury_dernancourt_livepop, 500);
}
