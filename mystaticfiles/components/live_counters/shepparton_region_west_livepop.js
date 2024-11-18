function shepparton_region_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10129;
var increase = Math.round(passed*2.13944393493168e-13*population);
document.getElementById("shepparton_region_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(shepparton_region_west_livepop, 500);
}
