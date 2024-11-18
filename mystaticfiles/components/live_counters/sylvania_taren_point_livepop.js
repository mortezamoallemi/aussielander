function sylvania_taren_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15940;
var increase = Math.round(passed*3.38715867138799e-13*population);
document.getElementById("sylvania_taren_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sylvania_taren_point_livepop, 500);
}
