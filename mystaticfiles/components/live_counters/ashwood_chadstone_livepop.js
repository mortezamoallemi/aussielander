function ashwood_chadstone_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18299;
var increase = Math.round(passed*7.51568881370732e-13*population);
document.getElementById("ashwood_chadstone_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ashwood_chadstone_livepop, 500);
}
