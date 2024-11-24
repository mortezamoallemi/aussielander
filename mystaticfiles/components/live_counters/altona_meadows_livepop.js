function altona_meadows_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19159;
var increase = Math.round(passed*1.38205116625832e-13*population);
document.getElementById("altona_meadows_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(altona_meadows_livepop, 500);
}
