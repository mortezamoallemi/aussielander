function mount_barker_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6285;
var increase = Math.round(passed*3.74081399169305e-13*population);
document.getElementById("mount_barker_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_barker_region_livepop, 500);
}
