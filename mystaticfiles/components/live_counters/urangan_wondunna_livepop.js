function urangan_wondunna_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12614;
var increase = Math.round(passed*6.46776625594144e-13*population);
document.getElementById("urangan_wondunna_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(urangan_wondunna_livepop, 500);
}
