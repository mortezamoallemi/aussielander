function geilston_bay_risdon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3222;
var increase = Math.round(passed*7.92259946676025e-14*population);
document.getElementById("geilston_bay_risdon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(geilston_bay_risdon_livepop, 500);
}
