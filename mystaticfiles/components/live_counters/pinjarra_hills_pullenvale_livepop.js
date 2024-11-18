function pinjarra_hills_pullenvale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5403;
var increase = Math.round(passed*4.23976513650242e-14*population);
document.getElementById("pinjarra_hills_pullenvale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pinjarra_hills_pullenvale_livepop, 500);
}
