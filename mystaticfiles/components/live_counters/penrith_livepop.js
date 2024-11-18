function penrith_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13295;
var increase = Math.round(passed*7.49539603808981e-13*population);
document.getElementById("penrith_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(penrith_livepop, 500);
}
