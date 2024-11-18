function wanneroo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25621;
var increase = Math.round(passed*6.97385088757483e-13*population);
document.getElementById("wanneroo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wanneroo_livepop, 500);
}
