function lemon_tree_passage_tanilba_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6685;
var increase = Math.round(passed*3.59093091307351e-13*population);
document.getElementById("lemon_tree_passage_tanilba_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lemon_tree_passage_tanilba_bay_livepop, 500);
}
