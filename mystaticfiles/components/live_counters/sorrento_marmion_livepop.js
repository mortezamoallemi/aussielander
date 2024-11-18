function sorrento_marmion_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9620;
var increase = Math.round(passed*5.22955537031094e-14*population);
document.getElementById("sorrento_marmion_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sorrento_marmion_livepop, 500);
}
