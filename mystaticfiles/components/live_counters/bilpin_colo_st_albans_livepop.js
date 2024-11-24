function bilpin_colo_st_albans_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2691;
var increase = Math.round(passed*1.26153078701458e-13*population);
document.getElementById("bilpin_colo_st_albans_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bilpin_colo_st_albans_livepop, 500);
}
