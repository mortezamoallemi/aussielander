function bulahdelah_stroud_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4725;
var increase = Math.round(passed*-4.02536249423525e-15*population);
document.getElementById("bulahdelah_stroud_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bulahdelah_stroud_livepop, 500);
}
