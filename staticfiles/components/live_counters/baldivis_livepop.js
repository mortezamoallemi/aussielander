function baldivis_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 33029;
var increase = Math.round(passed*4.36545395227789e-12*population);
document.getElementById("baldivis_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(baldivis_livepop, 500);
}
