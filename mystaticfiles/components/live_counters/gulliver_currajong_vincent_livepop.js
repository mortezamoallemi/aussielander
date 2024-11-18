function gulliver_currajong_vincent_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7728;
var increase = Math.round(passed*-3.02856616539193e-13*population);
document.getElementById("gulliver_currajong_vincent_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gulliver_currajong_vincent_livepop, 500);
}
