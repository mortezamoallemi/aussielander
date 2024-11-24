function hastings_somers_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22019;
var increase = Math.round(passed*5.15817435641918e-13*population);
document.getElementById("hastings_somers_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hastings_somers_livepop, 500);
}
