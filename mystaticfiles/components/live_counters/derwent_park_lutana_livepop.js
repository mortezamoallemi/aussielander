function derwent_park_lutana_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4151;
var increase = Math.round(passed*1.07037297927438e-14*population);
document.getElementById("derwent_park_lutana_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(derwent_park_lutana_livepop, 500);
}
