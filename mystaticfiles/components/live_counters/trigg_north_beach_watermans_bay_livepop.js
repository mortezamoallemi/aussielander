function trigg_north_beach_watermans_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7522;
var increase = Math.round(passed*5.24441958236571e-13*population);
document.getElementById("trigg_north_beach_watermans_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(trigg_north_beach_watermans_bay_livepop, 500);
}
