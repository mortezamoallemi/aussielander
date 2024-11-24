function eastwood_denistone_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25045;
var increase = Math.round(passed*5.39656507732056e-13*population);
document.getElementById("eastwood_denistone_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(eastwood_denistone_livepop, 500);
}
