function woodridge_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12580;
var increase = Math.round(passed*-1.04001648435442e-13*population);
document.getElementById("woodridge_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(woodridge_livepop, 500);
}
