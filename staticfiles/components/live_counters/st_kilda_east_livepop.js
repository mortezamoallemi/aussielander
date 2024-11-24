function st_kilda_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16418;
var increase = Math.round(passed*2.79962566008827e-13*population);
document.getElementById("st_kilda_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_kilda_east_livepop, 500);
}
