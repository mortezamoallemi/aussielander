function brighton_pontville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5444;
var increase = Math.round(passed*8.05050586338268e-13*population);
document.getElementById("brighton_pontville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brighton_pontville_livepop, 500);
}
