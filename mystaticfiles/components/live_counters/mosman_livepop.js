function mosman_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 28476;
var increase = Math.round(passed*2.32259019503035e-13*population);
document.getElementById("mosman_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mosman_livepop, 500);
}
