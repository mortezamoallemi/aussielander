function nunawading_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11880;
var increase = Math.round(passed*5.19293640365123e-13*population);
document.getElementById("nunawading_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nunawading_livepop, 500);
}
