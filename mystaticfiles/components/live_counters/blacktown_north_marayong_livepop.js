function blacktown_north_marayong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18024;
var increase = Math.round(passed*4.17750928281011e-13*population);
document.getElementById("blacktown_north_marayong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(blacktown_north_marayong_livepop, 500);
}
