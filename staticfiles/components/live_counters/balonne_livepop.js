function balonne_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4378;
var increase = Math.round(passed*-4.75678041879625e-13*population);
document.getElementById("balonne_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(balonne_livepop, 500);
}
