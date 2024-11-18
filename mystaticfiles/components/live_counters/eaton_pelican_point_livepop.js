function eaton_pelican_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11758;
var increase = Math.round(passed*8.76663117508254e-13*population);
document.getElementById("eaton_pelican_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(eaton_pelican_point_livepop, 500);
}
