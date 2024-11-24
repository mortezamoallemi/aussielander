function pemberton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5039;
var increase = Math.round(passed*1.13373007788763e-14*population);
document.getElementById("pemberton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pemberton_livepop, 500);
}
