function carlton_north_princes_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8426;
var increase = Math.round(passed*9.78447480636508e-14*population);
document.getElementById("carlton_north_princes_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(carlton_north_princes_hill_livepop, 500);
}
