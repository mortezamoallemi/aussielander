function ceduna_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2556;
var increase = Math.round(passed*-2.09872333744579e-13*population);
document.getElementById("ceduna_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ceduna_livepop, 500);
}
