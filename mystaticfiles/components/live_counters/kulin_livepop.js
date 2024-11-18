function kulin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4293;
var increase = Math.round(passed*-4.15944889459759e-13*population);
document.getElementById("kulin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kulin_livepop, 500);
}
