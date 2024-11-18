function yangebup_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7476;
var increase = Math.round(passed*3.0497313190387e-13*population);
document.getElementById("yangebup_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yangebup_livepop, 500);
}
