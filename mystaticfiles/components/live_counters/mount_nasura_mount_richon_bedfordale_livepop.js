function mount_nasura_mount_richon_bedfordale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7959;
var increase = Math.round(passed*5.22985051243019e-13*population);
document.getElementById("mount_nasura_mount_richon_bedfordale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_nasura_mount_richon_bedfordale_livepop, 500);
}
