function mount_baw_baw_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6012;
var increase = Math.round(passed*4.87112239863724e-14*population);
document.getElementById("mount_baw_baw_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_baw_baw_region_livepop, 500);
}
