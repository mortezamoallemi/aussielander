function morley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21712;
var increase = Math.round(passed*4.26460026920165e-13*population);
document.getElementById("morley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(morley_livepop, 500);
}
