function queensland_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4703192;
var increase = Math.round(passed*5.20306844215899e-13*population);
document.getElementById("queensland_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(queensland_livepop, 500);
}
