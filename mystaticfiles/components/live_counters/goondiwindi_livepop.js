function goondiwindi_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6356;
var increase = Math.round(passed*-3.97865696171882e-14*population);
document.getElementById("goondiwindi_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(goondiwindi_livepop, 500);
}
