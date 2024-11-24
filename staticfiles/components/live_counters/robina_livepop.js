function robina_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23109;
var increase = Math.round(passed*7.52637896955655e-13*population);
document.getElementById("robina_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(robina_livepop, 500);
}
