function keilor_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26148;
var increase = Math.round(passed*4.79474515864057e-13*population);
document.getElementById("keilor_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(keilor_east_livepop, 500);
}
