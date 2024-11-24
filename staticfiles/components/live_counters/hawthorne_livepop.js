function hawthorne_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4972;
var increase = Math.round(passed*2.52410735317396e-13*population);
document.getElementById("hawthorne_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hawthorne_livepop, 500);
}
