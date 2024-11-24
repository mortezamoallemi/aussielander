function new_norfolk_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6602;
var increase = Math.round(passed*2.64817931330768e-13*population);
document.getElementById("new_norfolk_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(new_norfolk_livepop, 500);
}
