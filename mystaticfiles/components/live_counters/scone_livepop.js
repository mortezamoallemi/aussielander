function scone_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5823;
var increase = Math.round(passed*-6.60908795294785e-14*population);
document.getElementById("scone_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(scone_livepop, 500);
}
