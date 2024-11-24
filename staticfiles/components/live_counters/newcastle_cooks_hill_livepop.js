function newcastle_cooks_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10757;
var increase = Math.round(passed*3.77113536472795e-13*population);
document.getElementById("newcastle_cooks_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(newcastle_cooks_hill_livepop, 500);
}
