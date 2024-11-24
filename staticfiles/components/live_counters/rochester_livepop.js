function rochester_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3882;
var increase = Math.round(passed*1.40405907516193e-13*population);
document.getElementById("rochester_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rochester_livepop, 500);
}
