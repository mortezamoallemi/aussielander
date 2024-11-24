function lord_howe_island_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 381;
var increase = Math.round(passed*3.77200574825102e-13*population);
document.getElementById("lord_howe_island_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lord_howe_island_livepop, 500);
}
