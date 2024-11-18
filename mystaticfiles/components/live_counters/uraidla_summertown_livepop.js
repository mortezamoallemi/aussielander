function uraidla_summertown_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5418;
var increase = Math.round(passed*8.01000935755208e-14*population);
document.getElementById("uraidla_summertown_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(uraidla_summertown_livepop, 500);
}
