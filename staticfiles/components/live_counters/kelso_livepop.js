function kelso_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10627;
var increase = Math.round(passed*2.30929430320759e-13*population);
document.getElementById("kelso_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kelso_livepop, 500);
}
