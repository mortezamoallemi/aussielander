function glenlee_rockyview_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4980;
var increase = Math.round(passed*6.56882225281575e-13*population);
document.getElementById("glenlee_rockyview_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glenlee_rockyview_livepop, 500);
}
