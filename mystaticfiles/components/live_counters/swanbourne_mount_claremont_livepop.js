function swanbourne_mount_claremont_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8676;
var increase = Math.round(passed*6.04672492064778e-13*population);
document.getElementById("swanbourne_mount_claremont_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(swanbourne_mount_claremont_livepop, 500);
}
