function highfields_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13177;
var increase = Math.round(passed*1.00382135017e-12*population);
document.getElementById("highfields_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(highfields_livepop, 500);
}
