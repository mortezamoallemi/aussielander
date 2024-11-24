function ivanhoe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11384;
var increase = Math.round(passed*1.6822558212797e-13*population);
document.getElementById("ivanhoe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ivanhoe_livepop, 500);
}
