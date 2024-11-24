function delahey_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8342;
var increase = Math.round(passed*-7.55723718008212e-14*population);
document.getElementById("delahey_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(delahey_livepop, 500);
}
