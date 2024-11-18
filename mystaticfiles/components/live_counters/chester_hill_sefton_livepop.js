function chester_hill_sefton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18461;
var increase = Math.round(passed*6.5709416329108e-13*population);
document.getElementById("chester_hill_sefton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chester_hill_sefton_livepop, 500);
}
