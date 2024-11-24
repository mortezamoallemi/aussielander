function queanbeyan_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16945;
var increase = Math.round(passed*1.16069361988452e-12*population);
document.getElementById("queanbeyan_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(queanbeyan_region_livepop, 500);
}
