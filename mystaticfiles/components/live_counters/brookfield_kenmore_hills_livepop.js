function brookfield_kenmore_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6752;
var increase = Math.round(passed*-1.68683980017603e-13*population);
document.getElementById("brookfield_kenmore_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brookfield_kenmore_hills_livepop, 500);
}
