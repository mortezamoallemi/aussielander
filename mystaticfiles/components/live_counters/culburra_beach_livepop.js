function culburra_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4962;
var increase = Math.round(passed*2.23734613437248e-13*population);
document.getElementById("culburra_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(culburra_beach_livepop, 500);
}
