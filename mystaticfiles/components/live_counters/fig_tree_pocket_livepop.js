function fig_tree_pocket_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4044;
var increase = Math.round(passed*6.43149690527714e-13*population);
document.getElementById("fig_tree_pocket_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fig_tree_pocket_livepop, 500);
}
