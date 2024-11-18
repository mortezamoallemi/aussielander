function ocean_reef_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7843;
var increase = Math.round(passed*-2.09959866660582e-13*population);
document.getElementById("ocean_reef_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ocean_reef_livepop, 500);
}
