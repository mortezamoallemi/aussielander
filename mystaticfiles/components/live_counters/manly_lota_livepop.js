function manly_lota_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7425;
var increase = Math.round(passed*2.535552876209e-13*population);
document.getElementById("manly_lota_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(manly_lota_livepop, 500);
}
