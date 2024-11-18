function claymore_eagle_vale_raby_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20405;
var increase = Math.round(passed*-1.86510105332411e-13*population);
document.getElementById("claymore_eagle_vale_raby_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(claymore_eagle_vale_raby_livepop, 500);
}
