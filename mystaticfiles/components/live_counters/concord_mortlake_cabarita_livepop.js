function concord_mortlake_cabarita_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21742;
var increase = Math.round(passed*6.63591431062463e-13*population);
document.getElementById("concord_mortlake_cabarita_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(concord_mortlake_cabarita_livepop, 500);
}
