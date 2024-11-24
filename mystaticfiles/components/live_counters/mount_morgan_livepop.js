function mount_morgan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2941;
var increase = Math.round(passed*-1.53390414613814e-13*population);
document.getElementById("mount_morgan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_morgan_livepop, 500);
}
