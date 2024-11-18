function plenty_yarrambat_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9363;
var increase = Math.round(passed*2.84682781247641e-13*population);
document.getElementById("plenty_yarrambat_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(plenty_yarrambat_livepop, 500);
}
