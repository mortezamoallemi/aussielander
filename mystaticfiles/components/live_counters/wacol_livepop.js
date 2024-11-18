function wacol_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5813;
var increase = Math.round(passed*1.03717340256296e-12*population);
document.getElementById("wacol_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wacol_livepop, 500);
}
