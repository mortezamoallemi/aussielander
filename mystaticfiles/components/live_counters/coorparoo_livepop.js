function coorparoo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16037;
var increase = Math.round(passed*4.46821708641383e-13*population);
document.getElementById("coorparoo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coorparoo_livepop, 500);
}
