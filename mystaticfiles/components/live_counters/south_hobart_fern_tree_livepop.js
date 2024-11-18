function south_hobart_fern_tree_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6091;
var increase = Math.round(passed*1.96682028190145e-13*population);
document.getElementById("south_hobart_fern_tree_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_hobart_fern_tree_livepop, 500);
}
