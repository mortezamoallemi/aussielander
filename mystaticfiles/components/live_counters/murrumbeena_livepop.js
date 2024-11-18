function murrumbeena_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9249;
var increase = Math.round(passed*4.680383936847e-13*population);
document.getElementById("murrumbeena_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(murrumbeena_livepop, 500);
}
