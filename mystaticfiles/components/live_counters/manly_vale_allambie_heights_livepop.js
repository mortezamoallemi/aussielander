function manly_vale_allambie_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16870;
var increase = Math.round(passed*3.75556743605347e-13*population);
document.getElementById("manly_vale_allambie_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(manly_vale_allambie_heights_livepop, 500);
}
