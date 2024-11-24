function one_tree_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2517;
var increase = Math.round(passed*2.91309611112491e-13*population);
document.getElementById("one_tree_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(one_tree_hill_livepop, 500);
}
