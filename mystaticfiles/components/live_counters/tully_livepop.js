function tully_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10662;
var increase = Math.round(passed*2.84047529009074e-13*population);
document.getElementById("tully_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tully_livepop, 500);
}
