function wynnum_west_hemmant_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14792;
var increase = Math.round(passed*1.99468268094217e-13*population);
document.getElementById("wynnum_west_hemmant_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wynnum_west_hemmant_livepop, 500);
}
