function scone_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8288;
var increase = Math.round(passed*3.27394510126929e-13*population);
document.getElementById("scone_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(scone_region_livepop, 500);
}
