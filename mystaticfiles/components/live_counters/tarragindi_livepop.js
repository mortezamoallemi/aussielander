function tarragindi_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10674;
var increase = Math.round(passed*4.35895004103216e-13*population);
document.getElementById("tarragindi_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tarragindi_livepop, 500);
}
