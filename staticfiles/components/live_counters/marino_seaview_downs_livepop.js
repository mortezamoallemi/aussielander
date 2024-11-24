function marino_seaview_downs_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9275;
var increase = Math.round(passed*1.52241991109348e-13*population);
document.getElementById("marino_seaview_downs_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(marino_seaview_downs_livepop, 500);
}
