function mount_isa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18342;
var increase = Math.round(passed*-7.2673500671787e-13*population);
document.getElementById("mount_isa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_isa_livepop, 500);
}
