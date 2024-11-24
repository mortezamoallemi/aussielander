function helena_valley_koongamia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5315;
var increase = Math.round(passed*8.34078917150918e-13*population);
document.getElementById("helena_valley_koongamia_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(helena_valley_koongamia_livepop, 500);
}
