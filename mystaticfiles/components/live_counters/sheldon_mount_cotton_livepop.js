function sheldon_mount_cotton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7904;
var increase = Math.round(passed*1.24418034998852e-12*population);
document.getElementById("sheldon_mount_cotton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sheldon_mount_cotton_livepop, 500);
}
