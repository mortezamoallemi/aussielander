function mount_waverley_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15275;
var increase = Math.round(passed*1.50831067612155e-13*population);
document.getElementById("mount_waverley_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_waverley_north_livepop, 500);
}
