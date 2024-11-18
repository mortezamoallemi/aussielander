function dural_kenthurst_wisemans_ferry_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21019;
var increase = Math.round(passed*2.39510059351713e-13*population);
document.getElementById("dural_kenthurst_wisemans_ferry_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dural_kenthurst_wisemans_ferry_livepop, 500);
}
