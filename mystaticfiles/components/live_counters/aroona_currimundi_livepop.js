function aroona_currimundi_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10072;
var increase = Math.round(passed*2.54380415996101e-13*population);
document.getElementById("aroona_currimundi_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(aroona_currimundi_livepop, 500);
}
