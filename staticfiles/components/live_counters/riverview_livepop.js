function riverview_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3071;
var increase = Math.round(passed*-3.45608738371991e-13*population);
document.getElementById("riverview_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(riverview_livepop, 500);
}