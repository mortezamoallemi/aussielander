function corowa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5482;
var increase = Math.round(passed*-1.41853468176068e-13*population);
document.getElementById("corowa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(corowa_livepop, 500);
}