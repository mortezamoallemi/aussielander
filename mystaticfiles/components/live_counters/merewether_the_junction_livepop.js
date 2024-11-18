function merewether_the_junction_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13622;
var increase = Math.round(passed*1.04680717355756e-13*population);
document.getElementById("merewether_the_junction_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(merewether_the_junction_livepop, 500);
}
