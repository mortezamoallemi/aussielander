function concord_west_north_strathfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24850;
var increase = Math.round(passed*2.03885397205346e-12*population);
document.getElementById("concord_west_north_strathfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(concord_west_north_strathfield_livepop, 500);
}
