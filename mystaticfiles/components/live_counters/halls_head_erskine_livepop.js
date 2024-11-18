function halls_head_erskine_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18531;
var increase = Math.round(passed*4.92643931540509e-13*population);
document.getElementById("halls_head_erskine_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(halls_head_erskine_livepop, 500);
}
