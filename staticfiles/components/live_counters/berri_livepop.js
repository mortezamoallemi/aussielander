function berri_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4086;
var increase = Math.round(passed*-2.32391553430484e-14*population);
document.getElementById("berri_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(berri_livepop, 500);
}
