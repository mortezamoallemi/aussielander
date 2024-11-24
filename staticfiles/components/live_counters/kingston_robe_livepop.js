function kingston_robe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3721;
var increase = Math.round(passed*7.54391618807102e-14*population);
document.getElementById("kingston_robe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kingston_robe_livepop, 500);
}
