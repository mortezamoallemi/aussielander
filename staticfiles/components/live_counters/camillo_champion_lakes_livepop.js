function camillo_champion_lakes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5532;
var increase = Math.round(passed*3.25782657747319e-13*population);
document.getElementById("camillo_champion_lakes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(camillo_champion_lakes_livepop, 500);
}
