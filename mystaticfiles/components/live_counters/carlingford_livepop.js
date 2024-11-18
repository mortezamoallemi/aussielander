function carlingford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 27359;
var increase = Math.round(passed*6.68732908822338e-13*population);
document.getElementById("carlingford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(carlingford_livepop, 500);
}
