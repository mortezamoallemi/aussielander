function waikiki_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12452;
var increase = Math.round(passed*2.44011472080344e-13*population);
document.getElementById("waikiki_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(waikiki_livepop, 500);
}
