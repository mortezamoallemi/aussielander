function st_kilda_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26122;
var increase = Math.round(passed*9.32258119557889e-13*population);
document.getElementById("st_kilda_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_kilda_livepop, 500);
}
