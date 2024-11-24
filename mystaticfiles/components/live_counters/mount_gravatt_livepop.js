function mount_gravatt_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14942;
var increase = Math.round(passed*3.54362270783697e-13*population);
document.getElementById("mount_gravatt_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_gravatt_livepop, 500);
}
