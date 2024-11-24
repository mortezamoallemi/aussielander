function eagle_farm_pinkenba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 822;
var increase = Math.round(passed*7.29996679376365e-12*population);
document.getElementById("eagle_farm_pinkenba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(eagle_farm_pinkenba_livepop, 500);
}
