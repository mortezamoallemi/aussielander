function blayney_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7273;
var increase = Math.round(passed*2.36296371029977e-13*population);
document.getElementById("blayney_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(blayney_livepop, 500);
}
