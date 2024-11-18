function spence_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2584;
var increase = Math.round(passed*6.16567018182629e-14*population);
document.getElementById("spence_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(spence_livepop, 500);
}
