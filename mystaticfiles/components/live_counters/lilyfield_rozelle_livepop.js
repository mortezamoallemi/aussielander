function lilyfield_rozelle_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13991;
var increase = Math.round(passed*4.57623479622181e-13*population);
document.getElementById("lilyfield_rozelle_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lilyfield_rozelle_livepop, 500);
}
