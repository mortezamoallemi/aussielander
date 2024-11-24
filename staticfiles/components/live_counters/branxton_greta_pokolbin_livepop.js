function branxton_greta_pokolbin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10124;
var increase = Math.round(passed*5.57519892474803e-13*population);
document.getElementById("branxton_greta_pokolbin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(branxton_greta_pokolbin_livepop, 500);
}
