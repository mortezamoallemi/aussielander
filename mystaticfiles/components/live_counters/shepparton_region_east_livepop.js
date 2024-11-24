function shepparton_region_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3850;
var increase = Math.round(passed*-1.25587438458776e-13*population);
document.getElementById("shepparton_region_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(shepparton_region_east_livepop, 500);
}
