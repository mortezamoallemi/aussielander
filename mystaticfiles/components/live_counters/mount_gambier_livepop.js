function mount_gambier_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 28685;
var increase = Math.round(passed*2.09248884481327e-13*population);
document.getElementById("mount_gambier_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_gambier_livepop, 500);
}