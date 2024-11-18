function eyre_peninsula_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6494;
var increase = Math.round(passed*1.1530255167123e-13*population);
document.getElementById("eyre_peninsula_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(eyre_peninsula_livepop, 500);
}
