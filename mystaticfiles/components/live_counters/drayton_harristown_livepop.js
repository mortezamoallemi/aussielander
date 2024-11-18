function drayton_harristown_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10195;
var increase = Math.round(passed*5.7489818498372e-14*population);
document.getElementById("drayton_harristown_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(drayton_harristown_livepop, 500);
}
