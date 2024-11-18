function crestmead_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11989;
var increase = Math.round(passed*4.26073856173566e-13*population);
document.getElementById("crestmead_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(crestmead_livepop, 500);
}
