function double_bay_bellevue_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24870;
var increase = Math.round(passed*2.44616598922719e-13*population);
document.getElementById("double_bay_bellevue_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(double_bay_bellevue_hill_livepop, 500);
}
