function reynella_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10152;
var increase = Math.round(passed*2.35456419932274e-13*population);
document.getElementById("reynella_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(reynella_livepop, 500);
}
