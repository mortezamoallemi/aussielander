function yackandandah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4487;
var increase = Math.round(passed*1.05464210466997e-13*population);
document.getElementById("yackandandah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yackandandah_livepop, 500);
}
