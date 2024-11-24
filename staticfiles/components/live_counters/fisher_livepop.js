function fisher_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3000;
var increase = Math.round(passed*-2.95269630656649e-14*population);
document.getElementById("fisher_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fisher_livepop, 500);
}
