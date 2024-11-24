function falcon_wannanup_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8785;
var increase = Math.round(passed*1.05899067582446e-12*population);
document.getElementById("falcon_wannanup_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(falcon_wannanup_livepop, 500);
}
