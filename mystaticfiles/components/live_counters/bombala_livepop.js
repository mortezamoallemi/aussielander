function bombala_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2391;
var increase = Math.round(passed*-7.38365243004983e-14*population);
document.getElementById("bombala_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bombala_livepop, 500);
}
