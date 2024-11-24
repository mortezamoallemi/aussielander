function crows_nest_waverton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18026;
var increase = Math.round(passed*5.14638534026161e-13*population);
document.getElementById("crows_nest_waverton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(crows_nest_waverton_livepop, 500);
}
