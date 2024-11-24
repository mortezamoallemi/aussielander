function roma_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5815;
var increase = Math.round(passed*-3.73756026702186e-13*population);
document.getElementById("roma_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(roma_region_livepop, 500);
}
