function bundoora_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7449;
var increase = Math.round(passed*1.99678054940611e-12*population);
document.getElementById("bundoora_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bundoora_north_livepop, 500);
}