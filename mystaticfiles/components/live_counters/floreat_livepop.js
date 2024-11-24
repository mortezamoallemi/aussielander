function floreat_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7900;
var increase = Math.round(passed*5.62925199485133e-13*population);
document.getElementById("floreat_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(floreat_livepop, 500);
}
