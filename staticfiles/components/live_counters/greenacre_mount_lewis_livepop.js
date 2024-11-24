function greenacre_mount_lewis_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25964;
var increase = Math.round(passed*4.17186963178411e-13*population);
document.getElementById("greenacre_mount_lewis_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(greenacre_mount_lewis_livepop, 500);
}
