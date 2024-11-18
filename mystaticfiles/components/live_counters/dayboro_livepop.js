function dayboro_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8490;
var increase = Math.round(passed*6.44994745944532e-13*population);
document.getElementById("dayboro_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dayboro_livepop, 500);
}
