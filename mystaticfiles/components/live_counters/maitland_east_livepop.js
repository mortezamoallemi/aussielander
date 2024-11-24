function maitland_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 27416;
var increase = Math.round(passed*3.83322318553112e-13*population);
document.getElementById("maitland_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maitland_east_livepop, 500);
}
