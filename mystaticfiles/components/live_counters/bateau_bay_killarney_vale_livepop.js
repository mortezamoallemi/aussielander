function bateau_bay_killarney_vale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22010;
var increase = Math.round(passed*1.84473387367448e-13*population);
document.getElementById("bateau_bay_killarney_vale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bateau_bay_killarney_vale_livepop, 500);
}
