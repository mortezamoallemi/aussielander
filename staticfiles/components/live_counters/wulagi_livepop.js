function wulagi_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2438;
var increase = Math.round(passed*-4.59017588040269e-13*population);
document.getElementById("wulagi_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wulagi_livepop, 500);
}
