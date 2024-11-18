function glenside_beaumont_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9607;
var increase = Math.round(passed*4.51380763965896e-13*population);
document.getElementById("glenside_beaumont_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glenside_beaumont_livepop, 500);
}
