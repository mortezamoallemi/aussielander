function bundaberg_north_gooburrum_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7217;
var increase = Math.round(passed*-6.03459189258996e-14*population);
document.getElementById("bundaberg_north_gooburrum_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bundaberg_north_gooburrum_livepop, 500);
}
