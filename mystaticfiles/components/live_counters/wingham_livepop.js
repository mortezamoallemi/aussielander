function wingham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5374;
var increase = Math.round(passed*7.35927068693984e-14*population);
document.getElementById("wingham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wingham_livepop, 500);
}
