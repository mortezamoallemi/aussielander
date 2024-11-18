function greenslopes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9121;
var increase = Math.round(passed*3.98139066494432e-13*population);
document.getElementById("greenslopes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(greenslopes_livepop, 500);
}
