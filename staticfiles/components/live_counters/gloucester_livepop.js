function gloucester_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5033;
var increase = Math.round(passed*2.08791797943459e-13*population);
document.getElementById("gloucester_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gloucester_livepop, 500);
}
