function lenah_valley_mount_stuart_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8320;
var increase = Math.round(passed*1.43388174455127e-13*population);
document.getElementById("lenah_valley_mount_stuart_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lenah_valley_mount_stuart_livepop, 500);
}
