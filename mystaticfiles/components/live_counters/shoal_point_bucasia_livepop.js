function shoal_point_bucasia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5749;
var increase = Math.round(passed*4.65663444656169e-13*population);
document.getElementById("shoal_point_bucasia_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(shoal_point_bucasia_livepop, 500);
}
