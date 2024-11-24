function bundaberg_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 69063;
var increase = Math.round(passed*1.60133611538248e-13*population);
document.getElementById("bundaberg_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bundaberg_livepop, 500);
}
