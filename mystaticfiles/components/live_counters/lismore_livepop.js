function lismore_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 28410;
var increase = Math.round(passed*2.77410785628399e-14*population);
document.getElementById("lismore_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lismore_livepop, 500);
}
