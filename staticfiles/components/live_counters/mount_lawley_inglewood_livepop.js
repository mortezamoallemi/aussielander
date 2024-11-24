function mount_lawley_inglewood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16516;
var increase = Math.round(passed*1.19776511592221e-13*population);
document.getElementById("mount_lawley_inglewood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_lawley_inglewood_livepop, 500);
}
