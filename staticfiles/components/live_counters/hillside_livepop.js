function hillside_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20214;
var increase = Math.round(passed*1.66685310036416e-12*population);
document.getElementById("hillside_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hillside_livepop, 500);
}
