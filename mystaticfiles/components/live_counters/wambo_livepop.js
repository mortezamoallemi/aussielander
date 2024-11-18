function wambo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17023;
var increase = Math.round(passed*1.81778092102477e-13*population);
document.getElementById("wambo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wambo_livepop, 500);
}
