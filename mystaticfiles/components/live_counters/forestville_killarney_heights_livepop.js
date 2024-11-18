function forestville_killarney_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12796;
var increase = Math.round(passed*2.55877083392492e-13*population);
document.getElementById("forestville_killarney_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(forestville_killarney_heights_livepop, 500);
}
