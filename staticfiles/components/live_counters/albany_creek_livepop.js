function albany_creek_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15800;
var increase = Math.round(passed*-2.48374659323111e-14*population);
document.getElementById("albany_creek_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(albany_creek_livepop, 500);
}
