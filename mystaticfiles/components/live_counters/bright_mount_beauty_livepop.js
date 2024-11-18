function bright_mount_beauty_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8147;
var increase = Math.round(passed*3.30751367970614e-13*population);
document.getElementById("bright_mount_beauty_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bright_mount_beauty_livepop, 500);
}
