function mount_hutton_windale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8901;
var increase = Math.round(passed*1.74079828782665e-13*population);
document.getElementById("mount_hutton_windale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_hutton_windale_livepop, 500);
}
