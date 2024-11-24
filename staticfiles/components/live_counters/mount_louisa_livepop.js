function mount_louisa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9260;
var increase = Math.round(passed*1.02102680479653e-12*population);
document.getElementById("mount_louisa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_louisa_livepop, 500);
}
