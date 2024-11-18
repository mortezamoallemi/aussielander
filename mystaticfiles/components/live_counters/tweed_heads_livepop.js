function tweed_heads_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19418;
var increase = Math.round(passed*4.13264626035556e-13*population);
document.getElementById("tweed_heads_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tweed_heads_livepop, 500);
}
