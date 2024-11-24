function mount_isa_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3357;
var increase = Math.round(passed*-8.78885456306452e-13*population);
document.getElementById("mount_isa_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_isa_region_livepop, 500);
}
