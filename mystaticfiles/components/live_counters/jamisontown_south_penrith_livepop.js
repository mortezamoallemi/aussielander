function jamisontown_south_penrith_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17288;
var increase = Math.round(passed*1.48460861609369e-13*population);
document.getElementById("jamisontown_south_penrith_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(jamisontown_south_penrith_livepop, 500);
}
