function elanora_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12150;
var increase = Math.round(passed*2.6977513890906e-13*population);
document.getElementById("elanora_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(elanora_livepop, 500);
}
