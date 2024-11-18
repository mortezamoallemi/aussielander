function conder_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5059;
var increase = Math.round(passed*-3.13065553552208e-13*population);
document.getElementById("conder_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(conder_livepop, 500);
}
