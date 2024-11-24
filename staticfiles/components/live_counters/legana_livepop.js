function legana_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4072;
var increase = Math.round(passed*6.41942713517136e-13*population);
document.getElementById("legana_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(legana_livepop, 500);
}
