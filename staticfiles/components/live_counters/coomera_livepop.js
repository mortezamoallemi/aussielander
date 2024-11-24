function coomera_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13305;
var increase = Math.round(passed*2.62673740507856e-12*population);
document.getElementById("coomera_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coomera_livepop, 500);
}
