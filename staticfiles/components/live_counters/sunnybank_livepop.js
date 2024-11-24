function sunnybank_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8856;
var increase = Math.round(passed*5.72950675929942e-13*population);
document.getElementById("sunnybank_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sunnybank_livepop, 500);
}
