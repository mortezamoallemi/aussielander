function northern_beaches_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6363;
var increase = Math.round(passed*2.95834901922988e-13*population);
document.getElementById("northern_beaches_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(northern_beaches_livepop, 500);
}
