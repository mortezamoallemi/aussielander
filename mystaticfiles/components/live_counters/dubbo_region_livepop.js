function dubbo_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5626;
var increase = Math.round(passed*5.42196901928356e-13*population);
document.getElementById("dubbo_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dubbo_region_livepop, 500);
}
