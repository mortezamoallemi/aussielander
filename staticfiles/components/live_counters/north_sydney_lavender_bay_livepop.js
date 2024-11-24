function north_sydney_lavender_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10703;
var increase = Math.round(passed*7.46826978641228e-13*population);
document.getElementById("north_sydney_lavender_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_sydney_lavender_bay_livepop, 500);
}
