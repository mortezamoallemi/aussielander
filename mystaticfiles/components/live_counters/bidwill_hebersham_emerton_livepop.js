function bidwill_hebersham_emerton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18439;
var increase = Math.round(passed*-5.47934367704347e-14*population);
document.getElementById("bidwill_hebersham_emerton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bidwill_hebersham_emerton_livepop, 500);
}
